const nextE1 = document.querySelector(".next");
const prevE1 = document.querySelector(".prev");
const imageContainerE1 = document.querySelector(".image-container");
const imgsE1 = document.querySelectorAll("img");

let currentImg = 0;
let timeout;

nextE1.addEventListener("click", () => {
    clearTimeout(timeout);
    currentImg++;
    updateImg();
});

prevE1.addEventListener("click", () => {
    clearTimeout(timeout);
    currentImg--;
    updateImg();
});

function updateImg() {
    if (currentImg >= imgsE1.length) {
        currentImg = 0;
    } else if (currentImg < 0) {
        currentImg = imgsE1.length - 1;
    }
    const size = imgsE1[0].clientWidth;
    imageContainerE1.style.transform = `translateX(${-size * currentImg}px)`;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        currentImg++;
        updateImg();
    }, 3000);
}

updateImg(); // Start the automatic slideshow
