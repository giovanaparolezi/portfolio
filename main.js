/* =========================
   CURSOR
========================= */
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
  if (!cursor) return;
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

/* =========================
   REVEAL GLOBAL
========================= */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
).forEach(el => observer.observe(el));

/* =========================
   SCROLL MENU
========================= */
function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

/* =========================
   MODAL
========================= */
function openModal(id) {
  document.getElementById(id)?.classList.add("active");
}

function closeModal(e) {
  if (e.target.classList.contains("modal")) {
    e.target.classList.remove("active");
  }
}

function closeModalById(id) {
  document.getElementById(id)?.classList.remove("active");
}

/* =========================
   PROJECT CARD 3D
========================= */
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = `rotateX(0) rotateY(0)`;
  });
});

/* =========================
   CONTACT SHAPE SCROLL
========================= */
const section = document.querySelector('.contactx-section');
const shape = document.querySelector('.contactx-shape');

if (section && shape) {
  window.addEventListener('scroll', () => {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      const progress = 1 - rect.top / windowHeight;
      const translateY = Math.min(progress * -60, 0);

      shape.style.transform =
        `translateX(-50%) translateY(${translateY}vh)`;
    }
  });
}

/* =========================
   REVEAL CONTACT
========================= */
const revealContact = document.querySelector('.reveal-contact');

if (revealContact) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.4 });

  obs.observe(revealContact);
}

/* =========================
   BACK TO TOP
========================= */
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (!backToTop) return;

  if (window.scrollY > 400) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* =========================
   THEME MODE (FIX DEFINITIVO)
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-mode");
  const icon = document.getElementById("themeIcon");
  const body = document.body;

  if (!toggle || !icon) return;

  function applyTheme(theme) {
    if (theme === "light") {
      body.classList.add("light");
      toggle.checked = true;
      icon.textContent = "☀️";
    } else {
      body.classList.remove("light");
      toggle.checked = false;
      icon.textContent = "🌙";
    }
  }

  /* carregar tema salvo */
  const savedTheme = localStorage.getItem("theme") || "dark";
  applyTheme(savedTheme);

  /* alternar tema */
  toggle.addEventListener("change", () => {
    const newTheme = toggle.checked ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  });
});
