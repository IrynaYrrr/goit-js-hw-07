import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const markup = galleryItems
.map(({preview, original, description }) =>
 `<li data-source="${original}" class="js-card">
 <a href="${original}">
 <img src="${preview}" alt="${description}" class="js-target">
 </a>
</li>`)
.join("");

galleryList.insertAdjacentHTML("beforeend", markup);

galleryList.addEventListener("click", onClick);

function onClick(evt){
  evt.preventDefault();
  if (!evt.target.classList.contains("js-target")) {
    return;
  }

  const currentCard = evt.target.closest(".js-card");

  const instance = basicLightbox.create(`
    <img src="${currentCard.dataset.source}"
      alt="${currentCard.querySelector("a > img").alt}"
      class="js-target"
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
