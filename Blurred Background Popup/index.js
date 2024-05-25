const container = document.querySelector(".container");
const btnE1 = document.querySelector(".btn");
const popContainerE1 = document.querySelector(".pop-container");
const closeIconE1 = document.querySelector(".close-icon");

btnE1.addEventListener("click", () => {
    container.classList.add("active");
    popContainerE1.classList.add("active");
    popContainerE1.classList.remove("hidden");
});

closeIconE1.addEventListener("click", () => {
    container.classList.remove("active");
    popContainerE1.classList.remove("active");
    popContainerE1.classList.add("hidden");
});
