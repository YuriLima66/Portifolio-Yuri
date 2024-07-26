document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const menuItems = navMenu.querySelectorAll("li a");

    // visibilidade do menu
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // fecha o menu
    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });
    });
});
