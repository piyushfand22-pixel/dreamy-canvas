// Minimal lightbox for gallery

function bootstrapGallery() {
  const images = document.querySelectorAll('.gallery-grid img');
  if (!images.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.8);display:none;align-items:center;justify-content:center;z-index:9999;';

  const img = document.createElement('img');
  img.style.maxWidth = '90%';
  img.style.maxHeight = '90%';
  img.alt = '';
  overlay.appendChild(img);

  document.body.appendChild(overlay);

  function open(src, alt) {
    img.src = src;
    img.alt = alt || '';
    overlay.style.display = 'flex';
  }

  function close() {
    overlay.style.display = 'none';
    img.src = '';
  }

  images.forEach(i => i.addEventListener('click', () => open(i.src, i.alt)));
  overlay.addEventListener('click', close);
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

window.Gallery = { bootstrapGallery };


