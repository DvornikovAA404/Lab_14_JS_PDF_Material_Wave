document.addEventListener("DOMContentLoaded", () => {
    const generateBtn = document.getElementById("generateBtn");
    generateBtn.addEventListener("click", generatePDF);
  });
  function createRipple(event) {
    const button = event.currentTarget;
    
    // Создаем элемент волны
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    // Позиционируем относительно кнопки
    const rect = button.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add('ripple');
    
    // Удаляем предыдущие волны
    const existingRipples = button.querySelectorAll('.ripple');
    existingRipples.forEach(ripple => ripple.remove());
    
    // Добавляем волну и автоматически удаляем после анимации
    button.appendChild(circle);
    circle.addEventListener('animationend', () => circle.remove());
}