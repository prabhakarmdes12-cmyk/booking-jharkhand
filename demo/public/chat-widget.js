(function () {
  var PHONE = '919972934937';
  var GREETING = 'Hi! Welcome to Booking Jharkhand. How can we help you plan your trip?';

  var styles = document.createElement('style');
  styles.textContent = [
    '#bj-chat-fab { position: fixed; bottom: 24px; right: 24px; z-index: 99999; width: 60px; height: 60px; border-radius: 50%; background: #25D366; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 20px rgba(37,211,102,0.5); transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); border: none; color: #fff; }',
    '#bj-chat-fab:hover { transform: scale(1.08); box-shadow: 0 6px 28px rgba(37,211,102,0.6); }',
    '#bj-chat-fab svg { width: 28px; height: 28px; }',
    '#bj-chat-fab.bj-chat-open { transform: rotate(45deg) scale(0.9); background: #e74c3c; box-shadow: 0 4px 16px rgba(231,76,60,0.4); }',
    '#bj-chat-popup { position: fixed; bottom: 96px; right: 24px; z-index: 99998; width: 360px; max-width: calc(100vw - 48px); background: #fff; border-radius: 20px; box-shadow: 0 12px 48px rgba(0,0,0,0.15); transform-origin: bottom right; transform: scale(0.9) translateY(20px); opacity: 0; visibility: hidden; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); overflow: hidden; }',
    '#bj-chat-popup.bj-chat-visible { transform: scale(1) translateY(0); opacity: 1; visibility: visible; }',
    '.bj-chat-header { background: #012d1d; padding: 20px 24px 16px; color: #fff; display: flex; align-items: center; gap: 12px; }',
    '.bj-chat-avatar { width: 42px; height: 42px; border-radius: 50%; background: #a5d0b9; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }',
    '.bj-chat-header-text { flex: 1; }',
    '.bj-chat-header-text h3 { font-size: 16px; font-weight: 700; margin: 0; line-height: 1.3; letter-spacing: -0.01em; }',
    '.bj-chat-header-text p { font-size: 12px; opacity: 0.7; margin: 0; line-height: 1.4; }',
    '.bj-chat-body { padding: 20px 24px; }',
    '.bj-chat-greeting { background: #f0faf4; border-radius: 12px; padding: 14px 16px; margin-bottom: 20px; font-size: 14px; color: #1a3a2a; line-height: 1.5; border-left: 3px solid #25D366; }',
    '.bj-chat-greeting strong { color: #012d1d; }',
    '.bj-chat-field { margin-bottom: 14px; }',
    '.bj-chat-field label { display: block; font-size: 12px; font-weight: 600; color: #414844; margin-bottom: 5px; letter-spacing: 0.03em; text-transform: uppercase; }',
    '.bj-chat-field input, .bj-chat-field textarea { width: 100%; padding: 11px 14px; border: 1.5px solid #d1d7d3; border-radius: 10px; font-size: 14px; outline: none; transition: border-color 0.2s; font-family: inherit; box-sizing: border-box; }',
    '.bj-chat-field input:focus, .bj-chat-field textarea:focus { border-color: #012d1d; }',
    '.bj-chat-field textarea { resize: vertical; min-height: 70px; }',
    '#bj-chat-send { width: 100%; background: #25D366; color: #fff; border: none; padding: 12px; border-radius: 10px; font-size: 15px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: background 0.2s; }',
    '#bj-chat-send:hover { background: #20bd5a; }',
    '#bj-chat-send:disabled { opacity: 0.6; cursor: not-allowed; }',
    '#bj-chat-send svg { width: 18px; height: 18px; }',
    '.bj-chat-footer { padding: 12px 24px 16px; text-align: center; font-size: 11px; color: #9ca8a2; border-top: 1px solid #eef2f0; }',
    '.bj-chat-footer strong { color: #012d1d; }',
    '@media (max-width: 480px) { #bj-chat-popup { right: 12px; left: 12px; bottom: 84px; width: auto; } }'
  ].join('\n');
  document.head.appendChild(styles);

  function openWhatsApp(name, message) {
    var text = name
      ? 'Hi! I\'m ' + encodeURIComponent(name) + '. ' + encodeURIComponent(message || '')
      : encodeURIComponent(GREETING);
    window.open('https://wa.me/' + PHONE + '?text=' + text, '_blank');
  }

  var fab = document.createElement('button');
  fab.id = 'bj-chat-fab';
  fab.setAttribute('aria-label', 'Chat with us');
  fab.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.56 5.338-11.898 11.901-11.898 3.181 0 6.173 1.24 8.421 3.488 2.249 2.248 3.489 5.241 3.489 8.419 0 6.561-5.337 11.899-11.901 11.899-2.017 0-3.991-.511-5.733-1.482l-6.276 1.683zm5.091-3.731c1.601.951 3.444 1.454 5.32 1.455 5.741 0 10.413-4.672 10.413-10.413 0-2.781-1.082-5.393-3.048-7.36s-4.577-3.048-7.365-3.048c-5.738 0-10.41 4.672-10.41 10.413 0 1.945.541 3.83 1.567 5.461l-1.026 3.748 3.849-1.031z"/></svg>';

  var popup = document.createElement('div');
  popup.id = 'bj-chat-popup';
  popup.innerHTML = [
    '<div class="bj-chat-header">',
      '<div class="bj-chat-avatar">&#x1F44B;</div>',
      '<div class="bj-chat-header-text"><h3>Booking Jharkhand</h3><p>Typically replies in 5 mins</p></div>',
    '</div>',
    '<div class="bj-chat-body">',
      '<div class="bj-chat-greeting"><strong>Hey there!</strong> ' + GREETING + '</div>',
      '<div class="bj-chat-field">',
        '<label>Your Name</label>',
        '<input type="text" id="bj_chat_name" placeholder="e.g. Rahul Sharma" maxlength="60">',
      '</div>',
      '<div class="bj-chat-field">',
        '<label>Your Question</label>',
        '<textarea id="bj_chat_msg" placeholder="e.g. Is the deluxe room available at Netarhat Forest Retreat for 25-27 June?" maxlength="500"></textarea>',
      '</div>',
      '<button id="bj-chat-send" disabled>',
        '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.56 5.338-11.898 11.901-11.898 3.181 0 6.173 1.24 8.421 3.488 2.249 2.248 3.489 5.241 3.489 8.419 0 6.561-5.337 11.899-11.901 11.899-2.017 0-3.991-.511-5.733-1.482l-6.276 1.683zm5.091-3.731c1.601.951 3.444 1.454 5.32 1.455 5.741 0 10.413-4.672 10.413-10.413 0-2.781-1.082-5.393-3.048-7.36s-4.577-3.048-7.365-3.048c-5.738 0-10.41 4.672-10.41 10.413 0 1.945.541 3.83 1.567 5.461l-1.026 3.748 3.849-1.031z"/></svg>',
        'Send on WhatsApp',
      '</button>',
    '</div>',
    '<div class="bj-chat-footer">Powered by <strong>Booking Jharkhand</strong></div>'
  ].join('');

  document.body.appendChild(fab);
  document.body.appendChild(popup);

  var nameInput = document.getElementById('bj_chat_name');
  var msgInput = document.getElementById('bj_chat_msg');
  var sendBtn = document.getElementById('bj-chat-send');
  var isOpen = false;

  function checkValid() {
    sendBtn.disabled = !nameInput.value.trim();
  }

  function toggleChat() {
    isOpen = !isOpen;
    fab.classList.toggle('bj-chat-open', isOpen);
    popup.classList.toggle('bj-chat-visible', isOpen);
    fab.innerHTML = isOpen
      ? '<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.56 5.338-11.898 11.901-11.898 3.181 0 6.173 1.24 8.421 3.488 2.249 2.248 3.489 5.241 3.489 8.419 0 6.561-5.337 11.899-11.901 11.899-2.017 0-3.991-.511-5.733-1.482l-6.276 1.683zm5.091-3.731c1.601.951 3.444 1.454 5.32 1.455 5.741 0 10.413-4.672 10.413-10.413 0-2.781-1.082-5.393-3.048-7.36s-4.577-3.048-7.365-3.048c-5.738 0-10.41 4.672-10.41 10.413 0 1.945.541 3.83 1.567 5.461l-1.026 3.748 3.849-1.031z"/></svg>';
    if (!isOpen) return;
    nameInput.focus();
  }

  fab.addEventListener('click', toggleChat);
  nameInput.addEventListener('input', checkValid);
  msgInput.addEventListener('input', checkValid);

  sendBtn.addEventListener('click', function () {
    var name = nameInput.value.trim();
    if (!name) return;
    openWhatsApp(name, msgInput.value.trim());
    nameInput.value = '';
    msgInput.value = '';
    sendBtn.disabled = true;
    toggleChat();
  });

  nameInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') { e.preventDefault(); msgInput.focus(); }
  });
  msgInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && e.ctrlKey && !sendBtn.disabled) { e.preventDefault(); sendBtn.click(); }
  });

})();
