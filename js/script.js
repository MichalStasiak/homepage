console.log("Cześć wszystkim!")

let changeColorButton = document.querySelector(".changeBackground");
let body = document.querySelector(".body");
let changeMotiv = document.querySelector(".changeMotiv");
let themeName = document.querySelector(".themeName");

changeColorButton.addEventListener("click", () => {
    body.classList.toggle("greyBackground");
});

changeMotiv.addEventListener("click", () => {
    body.classList.toggle("dark");
    themeName.innerText = body.classList.contains("dark") ?
        "jasny" : "ciemny";

});
