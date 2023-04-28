import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const markup = galleryItems
.map(({preview, original, description }) =>
 `<li class="gallery__item">
    <a href="${original}" class="gallery__link">
      <img src="${preview}" data-source="${original}" alt="${description}" class="gallery__image">
    </a>
  </li>`)
.join("");

galleryList.insertAdjacentHTML("beforeend", markup);

galleryList.addEventListener("click", onClick);

function onClick(evt){
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const currentCard = evt.target.closest(".gallery__item").querySelector("a > img");

  const instance = basicLightbox.create(`
    <img src="${currentCard.dataset.source}"
      alt="${currentCard.alt}"
      class="gallery__image"
    >`, {
      onShow: () => {
        document.addEventListener('keydown', onEscape);
      },
      onClose: () => {
        document.removeEventListener('keydown', onEscape);
      }
    });

  instance.show();

  function onEscape(e){
   if(e.key === "Escape") {
      instance.close();
   }
  }
}
