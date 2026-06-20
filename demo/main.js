import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ── Lenis Smooth Scroll ──
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  smoothWheel: true,
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => lenis.raf(time * 1000))
gsap.ticker.lagSmoothing(0)

// ── Custom Magnetic Cursor ──
const cursor = document.createElement('div')
cursor.id = 'custom-cursor'
const cursorDot = document.createElement('div')
cursorDot.className = 'cursor-dot'
const cursorRing = document.createElement('div')
cursorRing.className = 'cursor-ring'
cursor.appendChild(cursorDot)
cursor.appendChild(cursorRing)
document.body.appendChild(cursor)

const style = document.createElement('style')
style.textContent = `
  #custom-cursor {
    position: fixed;
    top: 0; left: 0;
    pointer-events: none;
    z-index: 99999;
    display: none;
  }
  .cursor-dot {
    position: absolute;
    width: 8px; height: 8px;
    border-radius: 50%;
    background: #a5d0b9;
    transform: translate(-50%, -50%);
    transition: width 0.2s, height 0.2s, background 0.2s;
  }
  .cursor-ring {
    position: absolute;
    width: 40px; height: 40px;
    border-radius: 50%;
    border: 1.5px solid rgba(165, 208, 185, 0.5);
    transform: translate(-50%, -50%);
    transition: width 0.3s, height 0.3s, border-color 0.3s;
  }
  .cursor-hover .cursor-dot {
    width: 12px; height: 12px;
    background: #c1ecd4;
  }
  .cursor-hover .cursor-ring {
    width: 64px; height: 64px;
    border-color: rgba(193, 236, 212, 0.6);
    border-width: 2px;
  }
  .cursor-pointer .cursor-dot {
    width: 0; height: 0;
  }
  .cursor-pointer .cursor-ring {
    width: 48px; height: 48px;
    border-color: #a5d0b9;
    background: rgba(165, 208, 185, 0.08);
  }
  @media (hover: none) and (pointer: coarse) {
    #custom-cursor { display: none !important; }
  }
`
document.head.appendChild(style)

let cursorVisible = false
let cursorPos = { x: 0, y: 0 }
let cursorTarget = { x: 0, y: 0 }

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

if (!isTouchDevice()) {
  cursor.style.display = 'block'
  cursorVisible = true

  document.addEventListener('mousemove', (e) => {
    cursorTarget.x = e.clientX
    cursorTarget.y = e.clientY
  })

  gsap.ticker.add(() => {
    cursorPos.x += (cursorTarget.x - cursorPos.x) * 0.15
    cursorPos.y += (cursorTarget.y - cursorPos.y) * 0.15
    gsap.set(cursor, { x: cursorPos.x, y: cursorPos.y })
  })

  const interactiveSelectors = 'a, button, .card-hover, .bento-card, .btn-primary, .btn-outline-light, input, select, textarea, .nav-link, .whatsapp-fab, [onclick]'

  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest(interactiveSelectors)
    if (target) {
      cursor.classList.add('cursor-hover')
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        cursor.classList.add('cursor-pointer')
      }
    }
  })

  document.addEventListener('mouseout', (e) => {
    const target = e.target.closest(interactiveSelectors)
    if (target) {
      cursor.classList.remove('cursor-hover', 'cursor-pointer')
    }
  })
}

// ── Page Transitions (GSAP Clip-Path) ──
const transitionOverlay = document.createElement('div')
transitionOverlay.id = 'page-transition'
transitionOverlay.style.cssText = `
  position: fixed; inset: 0; z-index: 99998;
  background: #012d1d;
  pointer-events: none;
  clip-path: circle(0% at 50% 50%);
  visibility: hidden;
`
document.body.appendChild(transitionOverlay)

function navigateTo(url) {
  if (!url || url === '#' || url.startsWith('javascript') || url.startsWith('wa.me') || url.startsWith('tel:') || url.startsWith('mailto:')) return false
  try {
    const u = new URL(url, window.location.origin)
    if (u.origin !== window.location.origin) return false
  } catch { return false }
  return true
}

document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href]')
  if (!link) return
  const href = link.getAttribute('href')
  if (!navigateTo(href)) return
  e.preventDefault()

  const rect = link.getBoundingClientRect()
  const cx = rect.left + rect.width / 2
  const cy = rect.top + rect.height / 2
  const vw = window.innerWidth
  const vh = window.innerHeight
  const xPct = (cx / vw) * 100
  const yPct = (cy / vh) * 100

  gsap.set(transitionOverlay, {
    visibility: 'visible',
    clipPath: `circle(0% at ${xPct}% ${yPct}%)`
  })

  const tl = gsap.timeline({
    onComplete: () => {
      window.location.href = href
    }
  })

  tl.to(transitionOverlay, {
    clipPath: `circle(150% at ${xPct}% ${yPct}%)`,
    duration: 0.6,
    ease: 'power3.inOut'
  })
})

// On page load, reveal from transition
function revealPage() {
  gsap.set(transitionOverlay, {
    visibility: 'visible',
    clipPath: 'circle(150% at 50% 50%)'
  })
  gsap.to(transitionOverlay, {
    clipPath: 'circle(0% at 50% 50%)',
    duration: 0.7,
    ease: 'power3.inOut',
    onComplete: () => {
      gsap.set(transitionOverlay, { visibility: 'hidden' })
    }
  })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', revealPage)
} else {
  revealPage()
}

// ── Hero Video ──
const heroVideo = document.querySelector('.hero-video')
if (heroVideo) {
  heroVideo.playbackRate = 0.7
}

// ── Deconstructed Search Overlay ──
const searchBtn = document.getElementById('openSearchOverlay')
const searchOverlay = document.getElementById('searchOverlay')
const closeSearchBtn = document.getElementById('closeSearchOverlay')

if (searchBtn && searchOverlay) {
  const tl = gsap.timeline({ paused: true })
  tl.set(searchOverlay, { visibility: 'visible' })
  tl.to(searchOverlay, {
    clipPath: 'circle(150% at 50% 50%)',
    duration: 0.6,
    ease: 'power3.inOut'
  })

  searchBtn.addEventListener('click', () => {
    tl.restart()
    document.body.style.overflow = 'hidden'
  })

  function closeSearch() {
    gsap.to(searchOverlay, {
      clipPath: 'circle(0% at 50% 50%)',
      duration: 0.5,
      ease: 'power3.inOut',
      onComplete: () => {
        gsap.set(searchOverlay, { visibility: 'hidden' })
        document.body.style.overflow = ''
      }
    })
  }

  if (closeSearchBtn) closeSearchBtn.addEventListener('click', closeSearch)

  searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) closeSearch()
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSearch()
  })
}

// ── Word-by-Word Text Reveal on Scroll ──
const revealTexts = document.querySelectorAll('[data-reveal]')
revealTexts.forEach((el) => {
  const words = el.textContent.split(' ')
  el.innerHTML = words.map((w) => `<span class="reveal-word" style="display:inline-block;overflow:hidden;vertical-align:top"><span style="display:inline-block;transform:translateY(100%);opacity:0">${w}</span></span>`).join(' ')

  ScrollTrigger.create({
    trigger: el,
    start: 'top 85%',
    onEnter: () => {
      gsap.to(el.querySelectorAll('.reveal-word > span'), {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.03,
        ease: 'power2.out'
      })
    },
    once: true
  })
})

// ── Skip links that should not transition (external, whatsapp, etc.) ──
document.querySelectorAll('a[href^="https://wa.me"], a[href^="tel:"], a[href^="mailto:"], a[target="_blank"]').forEach((el) => {
  el.addEventListener('click', (e) => e.stopPropagation(), true)
})
