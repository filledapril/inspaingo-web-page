const resultContainers = document.querySelectorAll('div.result-container');
const nextBtn = document.querySelectorAll('.arrow-btn--next');
const preBtn = document.querySelectorAll('.arrow-btn--pre');

resultContainers.forEach((container, i) => {
    let containerDimensions = container.getBoundingClientRect();

    let containerWidth = containerDimensions.width;

    nextBtn[i].addEventListener('click', () => {
        container.scrollLeft += containerWidth / 2;
    })

    preBtn[i].addEventListener('click', () => {
        container.scrollLeft -= containerWidth / 2;
    })
})