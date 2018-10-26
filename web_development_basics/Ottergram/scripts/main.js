const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

function setDetails() {
    const detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', 'img/otter3.jpg');

    const detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = "We should be dancing...."
}





