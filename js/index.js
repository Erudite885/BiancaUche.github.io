const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon')


function toggleMenu(){
    if (navMenu.classList.contains("showMenu")){
        navMenu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block"

    } else {
        navMenu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none"
    }
}

navLinks.forEach(
    function(navLink){
        navLink.addEventListener('click', toggleMenu);
    }
)

hamburger.addEventListener("click", toggleMenu);