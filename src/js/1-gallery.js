import '../css/styles.css';
import { images } from './images.js';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
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

// 1) Спочатку вставляємо ВСІ елементи
gallery.insertAdjacentHTML('beforeend', markup);

// 2) Потім ініціалізуємо SL
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

lightbox.refresh();
