// Сохранение изменений в localStorage
import html2pdf from 'html2pdf.js';
document.querySelectorAll('[contenteditable]').forEach(el => {
    el.addEventListener('input', () => {
      localStorage.setItem(el.id, el.innerText);
    });
  });
  
  // Восстановление данных при загрузке
  window.onload = () => {
    document.querySelectorAll('[contenteditable]').forEach(el => {
      const saved = localStorage.getItem(el.id);
      if (saved) el.innerText = saved;
    });
  };
  
  // Material Wave эффект
  document.querySelectorAll('.ripple').forEach(el => {
    el.addEventListener('click', (e) => {
      const rect = el.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      const ripple = document.createElement('span');
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.classList.add('ripple-effect');
      el.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
  
  // Скачивание PDF
  function downloadPDF() {
    const element = document.querySelector('#resume');
    const opt = {
      margin: 10,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  }

  document.querySelectorAll('.ripple').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

function downloadPDF() {
    const element = document.getElementById('resume');
    html2pdf().from(element).save('resume.pdf');
}


  