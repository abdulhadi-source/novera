const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const year = document.getElementById('year');
const counterElements = document.querySelectorAll('.counter');
const filterButtons = document.querySelectorAll('.filter-btn');
const appCards = document.querySelectorAll('.app-card');
const searchInput = document.getElementById('app-search');
const privacyToggles = document.querySelectorAll('.privacy-toggle');
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const statsSection = document.querySelector('.stats');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

const animateCounters = () => {
  counterElements.forEach((counter, index) => {
    const target = Number(counter.dataset.target || 0);
    const duration = 900 + index * 120;
    const startTime = performance.now();

    const step = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * easeOut);
      counter.textContent = `${value}${counter.dataset.suffix || ''}`;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  });
};

if (statsSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    });
  }, { threshold: 0.6 });

  observer.observe(statsSection);
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter || 'all';
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    appCards.forEach((card) => {
      const categories = card.dataset.category || '';
      const matches = filter === 'all' || categories.includes(filter);
      card.classList.toggle('is-hidden', !matches);
    });
  });
});

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    appCards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      const matches = text.includes(query);
      card.classList.toggle('is-hidden', !matches);
    });
  });
}

privacyToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const card = toggle.parentElement;
    const isOpen = card.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
});

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name')?.toString().trim() || '';
    const email = formData.get('email')?.toString().trim() || '';
    const subject = formData.get('subject')?.toString().trim() || '';
    const message = formData.get('message')?.toString().trim() || '';

    if (!name || !email || !subject || !message) {
      formStatus.textContent = 'Please fill out every field.';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formStatus.textContent = 'Please enter a valid email address.';
      return;
    }

    formStatus.textContent = 'Thank you! Your message has been received.';
    contactForm.reset();
  });
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const rect = button.getBoundingClientRect();
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});
