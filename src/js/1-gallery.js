// 1) Імпортуємо дані та бібліотеку (npm)
import { images } from './images.js';
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// 2) Рендеримо картки за шаблоном із ТЗ
const gallery = document.querySelector('.gallery');

const markup = images
  .map(
    ({ preview, original, description }) => `
<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);

// 3) Ініціалізуємо SimpleLightbox ПІСЛЯ додавання елементів і ПОЗА будь-якими функціями
new SimpleLightbox('.gallery a', {
  captionsData: 'alt', // підпис беремо з alt
  captionPosition: 'bottom', // знизу
  captionDelay: 250, // через 250 мс
});
