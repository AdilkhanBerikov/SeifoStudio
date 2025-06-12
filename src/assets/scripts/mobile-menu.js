const menu = document.querySelector('.mobile-menu');
const wrapper = document.querySelector('.mobile-menu__wrapper');
const openBtn = document.querySelector('.js-menu-open');
const closeBtn = document.querySelector('.js-menu-close');

// Открытие
openBtn?.addEventListener('click', () => {
  menu.classList.add('-open');
  document.body.classList.add('no-scroll');
});

// Закрытие
closeBtn?.addEventListener('click', () => {
  menu.classList.remove('-open');
  document.body.classList.remove('no-scroll');
});

// Закрытие при клике вне wrapper
document.addEventListener('click', (e) => {
  if (
    menu.classList.contains('-open') &&
    !wrapper.contains(e.target) &&
    !openBtn.contains(e.target)
  ) {
    menu.classList.remove('-open');
    document.body.classList.remove('no-scroll');
  }
});
