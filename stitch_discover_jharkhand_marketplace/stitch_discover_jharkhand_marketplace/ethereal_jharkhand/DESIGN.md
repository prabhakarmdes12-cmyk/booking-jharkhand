---
name: Ethereal Jharkhand
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#414844'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#717973'
  outline-variant: '#c1c8c2'
  surface-tint: '#3f6653'
  primary: '#012d1d'
  on-primary: '#ffffff'
  primary-container: '#1b4332'
  on-primary-container: '#86af99'
  inverse-primary: '#a5d0b9'
  secondary: '#6e5a4c'
  on-secondary: '#ffffff'
  secondary-container: '#f6dbc8'
  on-secondary-container: '#735f50'
  tertiary: '#322400'
  on-tertiary: '#ffffff'
  tertiary-container: '#4d3900'
  on-tertiary-container: '#d19f00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c1ecd4'
  primary-fixed-dim: '#a5d0b9'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#274e3d'
  secondary-fixed: '#f9ddcb'
  secondary-fixed-dim: '#dcc2b0'
  on-secondary-fixed: '#27190d'
  on-secondary-fixed-variant: '#554336'
  tertiary-fixed: '#ffdf9a'
  tertiary-fixed-dim: '#f8be00'
  on-tertiary-fixed: '#251a00'
  on-tertiary-fixed-variant: '#5a4300'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
  water-blue: '#0077B6'
  background-off-white: '#FEFEFE'
  text-onyx: '#121417'
  surface-stone: '#E9ECEF'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-xl:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Outfit
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  margin-mobile: 1.25rem
  margin-desktop: 5rem
  gutter: 1.5rem
  stack-unit: 0.5rem
  section-padding: 6rem
---

## Brand & Style

This design system is built to evoke the majestic, untouched beauty of Jharkhand's landscapes—from the deep sal forests of Saranda to the glistening waterfalls of Ranchi. The visual narrative is **Cinematic Minimalism**, focusing on high-end photography as the primary storyteller, framed by a structure that feels both authoritative and inviting.

The target audience consists of high-value travelers, eco-tourists, and cultural explorers who seek premium, reliable, and immersive experiences. The UI must feel grounded and trustworthy, utilizing expansive whitespace, refined typography, and subtle motion to create a sense of breathability and wonder. By blending the organic textures of nature with the precision of modern SaaS, this design system positions the region as a world-class destination.

## Colors

The palette is a sophisticated reflection of Jharkhand’s natural elements. 

- **Primary (Forest Green):** Used for core branding, primary CTAs, and navigation anchors. It represents the "Green Heart of India."
- **Secondary (Earth Brown):** Used for accents, secondary buttons, and divider elements to ground the vibrant greens.
- **Accent (Sunrise Yellow):** Reserved strictly for high-impact calls to action, badges, and highlighting seasonal "Best Time to Visit" indicators.
- **Neutral / Background:** The base of the application uses an off-white (#FEFEFE) to maintain a premium, editorial feel, while Water Blue is utilized sparingly for functional links and environmental data (weather, river levels).

## Typography

The typography strategy balances the bold, geometric presence of **Montserrat** for headlines with the approachable, airy clarity of **Outfit** for body text. **Inter** is employed for utility and functional labels to ensure high-speed scanning of data-heavy interfaces like booking engines.

Headlines should utilize "Title Case" for a more formal and premium appearance. Tracking (letter-spacing) is tightened on larger headlines for a cinematic "poster" feel, while labels are slightly tracked out to improve legibility on small screens.

## Layout & Spacing

This design system employs a **Fluid Grid** model with a 12-column layout for desktop and a 4-column layout for mobile. 

- **Horizontal Rhythm:** Generous side margins (80px on desktop) ensure content remains centered and focused, mimicking the layout of a luxury travel magazine.
- **Vertical Rhythm:** A strict 8px (0.5rem) baseline grid is used. Sections are separated by large gaps (96px+) to prevent the interface from feeling cluttered, encouraging a slow, deliberate scrolling experience.
- **Breakpoints:**
  - Mobile: 0 - 599px
  - Tablet: 600px - 1023px
  - Desktop: 1024px+

## Elevation & Depth

To maintain a "Cinematic" look, the design system avoids heavy shadows that feel "app-like." Instead, it uses **Tonal Layers** and **Ambient Shadows**.

- **Surface Levels:** The primary background is the off-white base. Content cards use a pure white (#FFFFFF) background with a very soft, diffused shadow (12% opacity, 20px blur) to appear as if floating just above the surface.
- **Interactive Depth:** On hover, cards should lift slightly (increasing shadow blur) to indicate interactivity. 
- **Image Overlays:** Large hero images use a 20-40% "Forest Green" gradient overlay at the bottom to ensure white typography remains legible while maintaining the brand's color essence.

## Shapes

The shape language is organic yet disciplined. All primary containers—including image headers and feature cards—utilize a **16px (rounded-lg)** radius. This softness mirrors the rounded hills and flowing rivers of the region.

Small components like chips, badges, and trust icons utilize the "Pill" style to distinguish them from larger structural elements. Buttons use the standard 8px (rounded-md) for a more professional, stable feel.

## Components

### Buttons
- **Primary:** Deep Forest Green background with White text. Bold, 16px padding on sides.
- **Secondary:** Earth Brown border with matching text. 
- **CTA:** Sunrise Yellow background with Onyx text for maximum contrast on booking actions.

### Premium Cards
Cards are the backbone of the system. They must always feature a 16:9 or 4:5 image container with a 16px corner radius. The content area below the image should be minimalist, featuring only a location tag, a title in Montserrat, and a "Starting from" price point.

### Trust Badges (Verified Jharkhand)
Small, pill-shaped components with a Forest Green border and a small checkmark icon. These should appear on verified tour operators and government-sanctioned accommodation listings.

### Input Fields
Clean, outlined fields using Stone Grey. On focus, the border transitions to Forest Green. Placeholders should be in a subtle grey to keep the focus on the user's data.

### Date/Location Picker
A horizontal, pill-shaped bar (inspired by Airbnb) that floats at the top of the search results or resides in the hero section. It uses internal vertical dividers and subtle hover states for each segment (Where, When, Who).