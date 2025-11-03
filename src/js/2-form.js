import '../css/styles.css';

const STORAGE_KEY = 'feedback-form-state';
let formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const emailEl = form.elements.email;
const messageEl = form.elements.message;

restoreFromStorage();

form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);

function onInput(evt) {
  const { name, value } = evt.target;
  if (!(name in formData)) return;

  formData = { ...formData, [name]: value };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  } catch {}
}

function onSubmit(evt) {
  evt.preventDefault();

  const email = formData.email.trim();
  const message = formData.message.trim();

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  console.log({ email, message });

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
  } catch {}
}
