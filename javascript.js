/* Progressive enhancement: all portfolio content is already present in the HTML. */
(() => {
  'use strict';
  document.documentElement.classList.add('js');
  document.getElementById('year').textContent = new Date().getFullYear();

  const themeToggle = document.querySelector('.theme-toggle');
  const themeChoices = [...document.querySelectorAll('[data-theme-choice]')];
  if (window.portfolioTheme) {
    function updateThemeControls() {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      const label = `Switch to ${next} theme`;
      themeToggle.setAttribute('aria-label', label);
      themeToggle.title = label;
      themeChoices.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.themeChoice === document.documentElement.dataset.themePreference)));
    }
    themeToggle.hidden = false;
    document.querySelector('.theme-settings').hidden = false;
    themeToggle.addEventListener('click', () => window.portfolioTheme.set(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
    themeChoices.forEach(button => button.addEventListener('click', () => window.portfolioTheme.set(button.dataset.themeChoice)));
    window.addEventListener('portfolio-theme-change', updateThemeControls);
    updateThemeControls();
  }

  const menu = document.querySelector('.menu-toggle');
  const navigation = document.getElementById('nav-links');
  const menuDialog = document.getElementById('navigation-panel');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let menuDestination = null;
  menu.hidden = false;
  menu.addEventListener('click', () => {
    if (menuDialog.open) return;
    menuDialog.showModal();
    menu.setAttribute('aria-expanded', 'true');
    document.body.classList.add('navigation-open');
    menuDialog.querySelector('.menu-close').focus();
  });
  menuDialog.querySelector('.menu-close').addEventListener('click', () => menuDialog.close());
  menuDialog.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const controls = [...menuDialog.querySelectorAll('a[href], button:not([disabled])')];
    const first = controls[0];
    const last = controls.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  menuDialog.addEventListener('click', event => {
    const rect = menuDialog.getBoundingClientRect();
    if (event.target === menuDialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) menuDialog.close();
  });
  menuDialog.addEventListener('close', () => {
    menu.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('navigation-open');
    if (menuDestination) {
      const target = document.querySelector(menuDestination);
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      target.scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth' });
      if (location.hash !== menuDestination) history.pushState(null, '', menuDestination);
      menuDestination = null;
    } else {
      menu.focus({ preventScroll: true });
    }
  });
  menuDialog.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (link.getAttribute('href').startsWith('#')) {
      event.preventDefault();
      menuDestination = link.getAttribute('href');
      markCurrentSection(link);
    }
    menuDialog.close();
  });

  const layers = {
    operations: 'My current focus: networking, Proxmox virtual machines, Linux server administration, institutional website maintenance, and VPN management.',
    network: 'I manage enterprise switching and wireless connectivity, troubleshoot network issues, and support reliable access to College of Science services.',
    security: 'I manage VPN accounts and remote access through pfSense, including account creation and renewal, access configuration, and user support.',
    virtualization: 'I manage Proxmox virtual machines: provisioning, resource allocation, snapshots, backups, and monitoring.',
    systems: 'I administer Linux production servers and containerized services, including maintenance, monitoring, backups, and troubleshooting.',
    services: 'I maintain CSRC and College of Science websites, web services, databases, and certificates, and support production deployments.',
    applications: 'Full-stack web development is my professional foundation and an ongoing skill. My earlier work includes websites, business platforms, and institutional applications.'

  };
  document.querySelectorAll('[data-layer]').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-layer]').forEach(layer => layer.setAttribute('aria-pressed', String(layer === button)));
      document.getElementById('stack-detail').textContent = layers[button.dataset.layer];
    });
  });

  const copyEmail = document.querySelector('.copy-email');
  const copyStatus = document.querySelector('.copy-status');
  let confirmationTimer;
  copyEmail.hidden = false;
  copyEmail.addEventListener('click', async () => {
    clearTimeout(confirmationTimer);
    const email = document.getElementById('contact-email').getAttribute('href').slice(7);
    try {
      await navigator.clipboard.writeText(email);
      copyStatus.textContent = 'Email copied.';
    } catch {
      // Leave the address selected for a manual copy when clipboard access is denied.
      const range = document.createRange();
      range.selectNodeContents(document.getElementById('contact-email'));
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      copyStatus.textContent = 'Select and copy the email address.';
    }
    confirmationTimer = setTimeout(() => { copyStatus.textContent = ''; }, 3500);
  });

  document.querySelector('.work-toolbar').hidden = false;
  const projects = [...document.querySelectorAll('.project')];
  document.querySelectorAll('[data-filter]').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
      let count = 0;
      projects.forEach(project => {
        project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter;
        if (!project.hidden) count++;
      });
      document.querySelectorAll('.work-group').forEach(group => {
        const visible = group.querySelectorAll('.project:not([hidden])').length;
        group.hidden = visible === 0;
        group.querySelector('.work-group-count').textContent = `${visible} project${visible === 1 ? '' : 's'}`;
      });
      document.getElementById('project-count').textContent = `${count} project${count === 1 ? '' : 's'}`;
    });
  });

  const dialog = document.querySelector('.image-dialog');
  let previewTrigger;
  if (typeof dialog.showModal === 'function') {
    document.querySelectorAll('.project-visual').forEach(link => {
      link.addEventListener('click', event => {
        // Preserve opening the original image in a new tab with modifier keys.
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        previewTrigger = link;
        const image = document.getElementById('preview-image');
        image.src = link.href;
        image.alt = link.querySelector('img').alt;
        const thumbnail = link.querySelector('img');
        image.width = Number(thumbnail.getAttribute('width'));
        image.height = Number(thumbnail.getAttribute('height'));
        document.getElementById('preview-title').textContent = link.dataset.title;
        dialog.showModal();
        document.querySelector('.preview-close').focus();
      });
    });
    document.querySelector('.preview-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    });
    dialog.addEventListener('close', () => previewTrigger?.focus({ preventScroll: true }));
  }

  // Track section starts so long project lists retain the correct active navigation link.
  const sectionLinks = [...navigation.querySelectorAll('a[href^="#"]')];
  const sectionCount = String(sectionLinks.length - 1).padStart(2, '0');
  let scheduled = false;
  function markCurrentSection(current) {
    sectionLinks.forEach(link => {
      if (link === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    document.getElementById('nav-location').textContent = current?.dataset.label || 'Portfolio / V2';
    document.getElementById('nav-position').textContent = current ? `${String(sectionLinks.indexOf(current)).padStart(2, '0')} / ${sectionCount}` : `Index / ${sectionCount}`;
  }
  function updateNavigation() {
    const atBottom = Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 2;
    const current = atBottom ? sectionLinks.at(-1) : sectionLinks.filter(link => document.querySelector(link.hash).getBoundingClientRect().top <= 140).at(-1);
    markCurrentSection(current);
    scheduled = false;
  }
  window.addEventListener('scroll', () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(updateNavigation);
    }
  }, { passive: true });
  window.addEventListener('resize', updateNavigation);
  window.addEventListener('hashchange', updateNavigation);
  // Expanded case studies and filters can move section boundaries without scrolling.
  if ('ResizeObserver' in window) new ResizeObserver(updateNavigation).observe(document.getElementById('main-content'));
  updateNavigation();
})();
