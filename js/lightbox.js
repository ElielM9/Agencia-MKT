`use strict`;
const images = document.querySelectorAll(`.img-gallery`);
const contentLight = document.querySelector(`.img-light`);
const addImg = document.querySelector(`.add-img`);
const hamburguer1 = document.querySelector(`.hamburguer`);

images.forEach((image) => {
  image.addEventListener(`click`, () => {
    showImage(image.getAttribute(`src`));
  });
});

contentLight.addEventListener(`click`, (e) => {
  if (e.target != addImg) {
    contentLight.classList.toggle(`show`);
    addImg.classList.toggle(`showImage`);
    hamburguer1.style.opacity = `1`;
  }
});

const showImage = (image) => {
  addImg.src = image;
  contentLight.classList.toggle(`show`);
  addImg.classList.toggle(`showImage`);
  hamburguer1.style.opacity = `0`;

};
