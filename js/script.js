{
    const welcome = () => {
        console.log("Witam wszystkich serdecznie")
    }

    const toggleBackground = () => {
        const bodyElement = document.querySelector(".js-body");
        const colorElement = document.querySelector(".js-color");

        bodyElement.classList.toggle("body--dark");
        colorElement.innerText = bodyElement.classList.contains("body--dark") ? "jasny" : "ciemny";
    };

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
        changeBackgroundButton.addEventListener("click", toggleBackground);

        welcome();
    };

    init();

}



