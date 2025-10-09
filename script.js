document.addEventListener('DOMContentLoaded', () => {
  tsParticles.load("tsparticles", {
    background: {
      color: { value: "#000000" } // fundo preto
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 150,
          links: {
            opacity: 0.5
          }
        }
      }
    },
    particles: {
      color: { value: "#ffffff" },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1
      },
      collisions: { enable: false },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 1,
        straight: false
      },
      number: {
        density: { enable: true, area: 800 },
        value: 60
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } }
    },
    detectRetina: true
  });

  const skillsSection = document.querySelector('.skills-cards-section');

  window.addEventListener('scroll', () => {
    if (!skillsSection) return; // se não encontrar a secao, sai

    const sectionTop = skillsSection.offsetTop;
    const scrollBottom = window.scrollY + window.innerHeight;

    if (scrollBottom > sectionTop + 100) {
      skillsSection.classList.add('visible');
    }
  });
});


// minha trajetoria //

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // evita repetir animacao
        }
      });
    },
    { threshold: 0.2 } // ativa quando 20% do item está visível
  );

  items.forEach(item => observer.observe(item));
});

// sobre mim // 

const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll();

// fim sobre // 
