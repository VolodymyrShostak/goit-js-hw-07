import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(`.gallery`);
const galleryContainer = creatGallery(galleryItems);
galleryRef.insertAdjacentHTML("afterbegin", galleryContainer);
galleryRef.addEventListener("click", openerLargeImage);

function creatGallery(galleryitems) {
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
        </a>
      </div>`;
    })
    .join("");
}
function openerLargeImage(e) {
  e.preventDefault();
  const handler = (e) => {
    if (e.key === "Escape") {
      largeImage.close();
    }
  };
  if (!e.target.classList.contains(`gallery__image`)) {
    return;
  }
  const largeImage = basicLightbox.create(
    `<img width="100%" height="100%" src="${e.target.dataset.source}">
    `,
    {
      onClose: () => {
        document.removeEventListener("keydown", handler);
      },
    }
  );
  largeImage.show();
  document.addEventListener("keydown", handler);
}
