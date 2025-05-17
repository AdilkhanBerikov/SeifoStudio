document.querySelectorAll('.faq__toggle').forEach(button => {
  button.addEventListener('click', () => {
    const text = button.closest('.faq__item').querySelector('.faq__text');
    text.classList.toggle('-expanded');
    button.classList.toggle('-rotated'); // если нужна анимация иконки
  });
});
