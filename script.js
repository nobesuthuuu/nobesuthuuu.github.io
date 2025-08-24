(function () {
  function setAccentColor(accent) {
    if (!accent) return;
    document.documentElement.style.setProperty('--accent', accent);
  }

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el && typeof text === 'string' && text.trim().length > 0) {
      el.textContent = text;
    }
  }

  function setImage(id, src, altFallback) {
    const el = document.getElementById(id);
    if (el && src) {
      el.setAttribute('src', src);
    }
    if (el && altFallback && !el.getAttribute('alt')) {
      el.setAttribute('alt', altFallback);
    }
  }

  function setLink(id, href) {
    const el = document.getElementById(id);
    if (!el) return;
    if (typeof href === 'string' && href.trim().length > 0 && href !== '#') {
      el.setAttribute('href', href);
    } else {
      el.style.display = 'none';
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const cfg = window.SITE_CONFIG || {};

    setAccentColor(cfg.accentColor);

    setText('full-name', cfg.fullName);
    setText('intro', cfg.intro);

    setImage('avatar', cfg.avatarImagePath, cfg.fullName ? cfg.fullName + ' profile photo' : 'Profile photo');

    const links = cfg.links || {};
    setLink('resume-link', links.resume);
    setLink('linkedin-link', links.linkedin);
    setLink('github-link', links.github);
    setLink('paper-link', links.paper);
  });
})();