const STORAGE_KEY = "feedback-form-state";
let formData = { email: "", message: "" };

const form = document.querySelector(".feedback-form");
const emailField = form.elements.email;
const messageField = form.elements.message;

restoreForm();

form.addEventListener("input", onInput);
form.addEventListener("submit", onSubmit);

function onInput(evt) {
  const { name, value } = evt.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmit(evt) {
  evt.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: "", message: "" };
}

function restoreForm() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);
    emailField.value = parsed.email || "";
    messageField.value = parsed.message || "";
    formData = parsed;
  } catch {
    console.error("Помилка зчитування з localStorage");
  }
}
