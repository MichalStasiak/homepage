console.log("Cześć wszystkim!")

let changeColorButton = document.querySelector(".js-changeBackground");
let body = document.querySelector(".js-body");
let changeMotiv = document.querySelector(".js-changeMotiv");
let themeName = document.querySelector(".js-themeName");

changeColorButton.addEventListener("click", () => {
    body.classList.toggle("greyBackground");
});

changeMotiv.addEventListener("click", () => {
    body.classList.toggle("dark");
    themeName.innerText = body.classList.contains("dark") ?
        "jasny" : "ciemny";

});
