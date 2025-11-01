// Імпорт бібліотеки SimpleLightbox
import SimpleLightbox from 'simplelightbox';
// Імпорт стилів бібліотеки
import 'simplelightbox/dist/simple-lightbox.min.css';

// Імпорт масиву зображень
import { images } from './images.js';

// Знаходимо контейнер галереї
const gallery = document.querySelector('.gallery');

// Створюємо розмітку карток галереї
const galleryMarkup = images
  .map(
    ({ preview, original, description }) => `
<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img class="gallery-image" src="${preview}" alt="${description}" />
  </a>
</li>`
  )
  .join('');

// Додаємо розмітку у DOM
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

// Ініціалізуємо SimpleLightbox поза функціями
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
