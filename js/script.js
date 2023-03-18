let ButtonElement = document.querySelector(".js-button");
let BodyElement = document.querySelector(".js-body");
let ColorElement = document.querySelector(".js-color");

ElementButton.addEventListener("click", () => {
    BodyElement.classList.toggle("dark");
    ColorElement.innerText = ElementBody.classList.contains("dark") ? "jasny" : "ciemny";
});


