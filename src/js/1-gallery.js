import { images } from './images.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

// Генеруємо ВСІ елементи одразу
const markup = images
  .map(
    ({ preview, original, description }) => `
<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img class="gallery-image" src="${preview}" alt="${description}" />
  </a>
</li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);

// Ініціалізуємо ПІСЛЯ вставки та ПОЗА функціями
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

// Якщо колись будеш ДОКИДАТИ нові елементи у .gallery — викличеш:
// lightbox.refresh();
