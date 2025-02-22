const openBook = document.querySelector("#open_book");
const closeBook = document.querySelector("#close_book");
const menuBurger = document.querySelector("#menu_burger");
const menu = document.querySelector("#menu");
const body = document.body;
const list = document.querySelector("#list");

// Function for switching classes
function toggleMenu() {
    closeBook.classList.toggle("open");
    closeBook.classList.toggle("close");
    openBook.classList.toggle("open");
    openBook.classList.toggle("close");

    body.classList.toggle("lock");
    menu.classList.toggle("show");
}

// Event handlers
menuBurger.addEventListener("click", toggleMenu);

list.addEventListener("click", () => {
    if (window.innerWidth <= 900) {
        toggleMenu();
    }
});

