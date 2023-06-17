{
    const welcome = () => {
     console.log("Witam wszystkich serdecznie")
    }
    
    const toggleBackground = () => {
<<<<<<< HEAD
        const bodyElement = document.querySelector(".js-body");
=======
        const bodyElement = document.querySelector("js-body");
>>>>>>> 58bf4792f8a10baf964db7528282877f7bd1681c
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
    


