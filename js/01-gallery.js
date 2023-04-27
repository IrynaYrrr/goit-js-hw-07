import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const markup = galleryItems
.map(({preview, original, description }, index) => `<li data-id="${index}" class="js-card">
<img src="${preview}" alt="${description}" class="js-target">
</li>`)
.join("");

galleryList.insertAdjacentHTML("beforeend", markup);


galleryList.addEventListener("click", onClick);

function onClick(evt){
  if (!evt.target.classList.contains("js-target")) {
    return;
  }

  const currentCard = evt.target.closest(".js-card");
  const cardId = currentCard.dataset.id;

  console.dir(cardId);

  const instance = basicLightbox.create(`
    <li class="js-card">
    <img src="${galleryItems[cardId].original}" alt="${galleryItems[cardId].description}" class="js-target">
    </li>`);
  instance.show()
}
