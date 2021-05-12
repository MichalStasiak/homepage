{
    const welcome = () => {
        console.log("Cześć wszystkim!")
    }


    const onChangeMotivClick = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-themeName");

        body.classList.toggle("dark");
        themeName.innerText = body.classList.contains("dark") ?
            "jasny" : "ciemny";

    }

    const onChangeBackgroundClick = () => {
        const changeBackground = document.querySelector(".js-changeBackground");
        const body = document.querySelector(".js-body");
        body.classList.toggle("greyBackground");
    }

    const init = () => {

        const changeMotiv = document.querySelector(".js-changeMotiv");
        changeMotiv.addEventListener("click", onChangeMotivClick);
        changeBackground.addEventListener("click", onChangeBackgroundClick);

        welcome();

    };

    init();

    


    


}