export default function Black() {
    const toogleButton = document.querySelector(".toogleButton")
    const menu_activate = document.querySelector(".menu_activate")
    toogleButton.addEventListener("click", () => {
        menu_activate.classList.toggle(".menu_navBar");
    })
}