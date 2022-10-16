import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(`.gallery`);
const galleryContainer = creatGallery(galleryItems);
galleryRef.insertAdjacentHTML("afterbegin", galleryContainer);
galleryRef.addEventListener("click", openerLargeImage);

function creatGallery(galleryitems) {
  //   preventDefault();
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        // </a>
      </div>`;
    })
    .join("");
}
function openerLargeImage(e) {
  largeImg.src = `target.original`;
}

console.log(creatGallery(galleryItems));
