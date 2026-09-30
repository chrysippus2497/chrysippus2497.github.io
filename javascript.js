/* Progressive enhancement: all portfolio content is already present in the HTML. */
(() => {
  'use strict';
  document.documentElement.classList.add('js');
  document.getElementById('year').textContent = new Date().getFullYear();

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
    }
    menuDialog.close();
  });

  const layers = {
    network: 'Connectivity is the foundation. Enterprise switching and wireless networks connect people, devices, and services.',
    security: 'Access connects that foundation to the right people. Firewall and VPN administration support secure remote connectivity.',
    virtualization: 'Virtualization gives services a place to run. Proxmox brings virtual machines, resources, snapshots, and backups together.',
    systems: 'Linux servers and containers provide the operating environment. Maintenance and monitoring support the services above them.',
    services: 'Web servers and databases serve the application. Configuration, certificates, and production support keep those pieces working together.',
    applications: 'Applications turn infrastructure into useful tools: institutional workflows, business platforms, and everyday services.',
    experience: 'People complete the picture. Clear interfaces and practical workflows make the underlying technology useful.'
  };
  document.querySelectorAll('[data-layer]').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-layer]').forEach(layer => layer.setAttribute('aria-pressed', String(layer === button)));
      document.getElementById('stack-detail').textContent = layers[button.dataset.layer];
    });
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
  const sectionCount = String(sectionLinks.length).padStart(2, '0');
  let scheduled = false;
  function updateNavigation() {
    const atBottom = Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 2;
    const current = atBottom ? sectionLinks.at(-1) : sectionLinks.filter(link => document.querySelector(link.hash).getBoundingClientRect().top <= 140).at(-1);
    sectionLinks.forEach(link => {
      if (link === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    document.getElementById('nav-location').textContent = current?.dataset.label || 'Portfolio';
    document.getElementById('nav-position').textContent = current ? `${String(sectionLinks.indexOf(current) + 1).padStart(2, '0')} / ${sectionCount}` : `Index / ${sectionCount}`;
    scheduled = false;
  }
  window.addEventListener('scroll', () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(updateNavigation);
    }
  }, { passive: true });
  updateNavigation();
})();
