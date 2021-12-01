const toogleButton = document.querySelector(".toogleButton")
const navBar = document.querySelector(".navBar")
toogleButton.addEventListener("click", () => {
    toogleMenu.classList.toggle(".navBar_visible");
})