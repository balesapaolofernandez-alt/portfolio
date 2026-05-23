const navLinks = document.getElementById("navLinks");

const menuBtn = document.getElementById("menuBtn");

const themeToggle = document.getElementById("theme-toggle");

/* MOBILE MENU */

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/* DARK MODE */

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const icon = themeToggle.querySelector("i");

    if(document.body.classList.contains("dark-mode")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});