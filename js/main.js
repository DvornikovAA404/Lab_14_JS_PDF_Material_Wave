import '../css/style.css'
import javascriptLogo from '../javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

// Material Wave
document.addEventListener('click', (e) => {
  const target = e.target.closest('[contenteditable="true"], button');
  if (!target) return;

  const wave = document.createElement('div');
  wave.className = 'wave';
  const rect = target.getBoundingClientRect();
  wave.style.width = wave.style.height = `${Math.max(rect.width, rect.height)}px`;
  wave.style.left = `${e.clientX - rect.left - rect.width / 2}px`;
  wave.style.top = `${e.clientY - rect.top - rect.height / 2}px`;
  target.appendChild(wave);
  setTimeout(() => wave.remove(), 600);
});

// Сохранение данных
document.querySelectorAll('[contenteditable="true"]').forEach(el => {
  el.addEventListener('input', () => {
    localStorage.setItem(el.id || 'resumeData', el.innerHTML);
  });
  el.innerHTML = localStorage.getItem(el.id || 'resumeData') || el.innerHTML;
});

document.getElementById('downloadBtn').addEventListener('click', () => {
  const element = document.querySelector('.resume');
  if (!element) {
    console.error('Элемент .resume не найден!');
    return;
  }

  const options = {
    margin: 10,
    filename: 'resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(options).from(element).save()
    .catch(err => console.error('Ошибка генерации PDF:', err));
});