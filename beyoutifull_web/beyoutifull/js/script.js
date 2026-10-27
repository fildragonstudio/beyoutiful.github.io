  /* ----- Navbar scroll ----- */
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', scrollY > 50);
  });

  /* ----- Mobile menu ----- */
  function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
  }

  /* ----- Slider ----- */
  let current = 0;
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let autoTimer = setInterval(() => changeSlide(1), 5500);

  function goToSlide(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function changeSlide(dir) {
    clearInterval(autoTimer);
    goToSlide(current + dir);
    autoTimer = setInterval(() => changeSlide(1), 5500);
  }

  /* ----- Lightbox ----- */
  const lbData = [
    { src: 'img/img1...jpeg', cap: 'Corte Femenino – Precisión y estilo en cada tijera' },
    { src: 'img/img4...t.jpeg', cap: 'Colorimetría – Tonos que iluminan tu personalidad' },
    { src: 'img/img peinado.jfif', cap: 'Peinado de Ocasión – Elegancia para tus momentos más especiales' },
    { src: 'img/img3...uñas.jpeg', cap: 'Manicure Clásica – El detalle que completa tu imagen' },
    { src: 'img/img diseño.jfif', cap: 'Nail Art – Arte en la punta de tus dedos' },
    { src: 'img/img2....jpeg', cap: 'Nutrición Capilar – Recupera la vida de tu cabello' },
    { src: 'img/img corte.jfif', cap: 'Corte & Afeitado – Barbería de precisión masculina' },
    { src: 'img/img maqui.jfif', cap: 'Maquillaje Profesional – Destaca tu belleza natural' }
  ];

  let lbIdx = 0;

  function openLightbox(i) {
    lbIdx = i;
    document.getElementById('lbImg').src = lbData[i].src;
    document.getElementById('lbCaption').textContent = lbData[i].cap;
    document.getElementById('lightbox').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
  }

  function closeLightboxOutside(e) {
    if (e.target === document.getElementById('lightbox')) closeLightbox();
  }

  function lbNav(dir) {
    lbIdx = (lbIdx + dir + lbData.length) % lbData.length;
    const img = document.getElementById('lbImg');
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = lbData[lbIdx].src;
      document.getElementById('lbCaption').textContent = lbData[lbIdx].cap;
      img.style.opacity = '1';
    }, 200);
  }

  document.addEventListener('keydown', e => {
    if (document.getElementById('lightbox').classList.contains('open')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') lbNav(-1);
      if (e.key === 'ArrowRight') lbNav(1);
    }
  });

  /* ----- Video promo ----- */
  function loadVideo() {
    const wrapper = document.getElementById('videoFallback');
    const iframe = document.getElementById('promoVideo');
    // Replace with your YouTube video ID
    iframe.src = 'https://www.youtube.com/embed/Y8jB5lPUvWA?autoplay=1&rel=0&modestbranding=1';
    wrapper.style.display = 'none';
    iframe.style.display = 'block';
  }

  /* ----- Scroll reveal ----- */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), 100);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* Stagger for grids */
  document.querySelectorAll('.servicio-card.reveal, .blog-card.reveal').forEach((el, i) => {
    el.style.transitionDelay = (i * 0.08) + 's';
  });
