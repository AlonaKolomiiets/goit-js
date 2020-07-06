import items from "./gallery-items.js";

function onImageClick(event) {
  event.preventDefault();
  const image = this.querySelector("img.gallery__image");
  const originalUrl = image.getAttribute("data-source");
  const alt = image.getAttribute("alt");

  const modal = document.querySelector(".js-lightbox");

  const modalImage = modal.querySelector("img.lightbox__image");
  modalImage.setAttribute("alt", alt);
  modalImage.setAttribute("src", originalUrl);

  modal.classList.add("is-open");
}

function insertImagesInPlugin(images, jsGallery) {
  let lis = [];

  for (const image of images) {
    const li = document.createElement("li");
    li.classList.add("gallery__item");
    li.addEventListener("click", onImageClick);

    li.insertAdjacentHTML(
      "afterbegin",
      `<a
        class="gallery__link"
        href="${image.original}">
        <img
          class="gallery__image"
          src="${image.preview}"
          data-source="${image.original}"
          alt="${image.description}"
        />
      </a>`
    );
    lis.push(li);
  }

  jsGallery.append(...lis);
}

function initCloseButton() {
  const modal = document.querySelector(".js-lightbox");
  const button = modal.querySelector("button[data-action='close-lightbox']");
  const modalImage = modal.querySelector("img.lightbox__image");

  button.addEventListener("click", () => {
    modal.classList.remove("is-open");
    modalImage.setAttribute("src", "");
    modalImage.setAttribute("alt", "");
  });
}

initCloseButton();

const jsGallery = document.querySelector(".js-gallery");
insertImagesInPlugin(items, jsGallery);
