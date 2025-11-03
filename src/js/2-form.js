import '../css/styles.css';
const STORAGE_KEY = 'feedback-form-state';

// Об'єкт formData ПОЗА будь-якими функціями
let formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const emailEl = form.elements.email;
const messageEl = form.elements.message;

// Відновлення стану при завантаженні сторінки
restoreFromStorage();

// Делегування: слухаємо input на формі
form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);

function onInput(evt) {
  const { name, value } = evt.target;
  if (!(name in formData)) return;

  // Записуємо у сховище обрізані значення
  formData = { ...formData, [name]: value.trim() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmit(evt) {
  evt.preventDefault();

  // Перевірка саме по formData (обидва поля мають бути заповнені)
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  // Вивід у консоль актуального об'єкта
  console.log(formData);

  // Очищення сховища, об'єкта і форми
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
}

function restoreFromStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;

  try {
    const saved = JSON.parse(raw);
    emailEl.value = typeof saved.email === 'string' ? saved.email : '';
    messageEl.value = typeof saved.message === 'string' ? saved.message : '';
    formData = { email: emailEl.value, message: messageEl.value };
  } catch {
    // Некоректний JSON — ігноруємо
  }
}
