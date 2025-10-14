  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        769: { slidesPerView: 2, spaceBetween: 10 },
        1100: { slidesPerView: 3, spaceBetween: 10 },
      },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    effect: 'slide', // o 'fade', 'cube', 'coverflow', 'flip'
  });
  const features = document.querySelectorAll('.feature');

  features.forEach((feature) => {
    feature.addEventListener('mouseenter', () => {
      features.forEach((f) => f.classList.remove('active'));
      feature.classList.add('active');
    });
  });

  document.querySelector('.features-container').addEventListener('mouseleave', () => {
    features.forEach((f) => f.classList.remove('active'));
  });
AOS.init();