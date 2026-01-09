
  /* CURSOR */
  const cursor = document.getElementById('cursor');
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  /* REVEAL */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => e.isIntersecting && e.target.classList.add('show'));
  });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

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
  