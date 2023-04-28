import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const markup = galleryItems
.map(({preview, original, description }) =>
 `<li class="gallery__item">
 <a href="${original}" class="gallery__link">
 <img src="${preview}" alt="${description}" class="gallery__image">
 </a>
</li>`)
.join("");

galleryList.insertAdjacentHTML("beforeend", markup);

console.log(galleryItems);
