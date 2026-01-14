
  /* CURSOR */
  const cursor = document.getElementById('cursor');
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
).forEach(el => observer.observe(el));

  /* TEMA */
  const themeMode = document.getElementById("theme-mode");
  themeMode.addEventListener("change", () => {
    document.body.classList.toggle("light", themeMode.checked);
  });

  /* SCROLL MENU */
  function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }

 
function openModal(id) {
  document.getElementById(id).classList.add("active");
}

function closeModal(e) {
  if (e.target.classList.contains("modal")) {
    e.target.classList.remove("active");
  }
}

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


function openModal(id) {
  document.getElementById(id).classList.add("active");
}

function closeModalById(id) {
  document.getElementById(id).classList.remove("active");
}

  const section = document.querySelector('.contactx-section');
  const shape = document.querySelector('.contactx-shape');

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

  const reveal = document.querySelector('.reveal-contact');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.4 });

  obs.observe(reveal);
  

  const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const themeToggle = document.getElementById("theme-mode");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

/* carregar tema salvo */
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  body.classList.add("light");
  themeToggle.checked = true;
  themeIcon.textContent = "☀️";
} else {
  themeIcon.textContent = "🌙";
}

/* alternar tema */
themeToggle.addEventListener("change", () => {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    themeIcon.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    themeIcon.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
});

