var backToTopButton = document.getElementById("back-to-top");

function showOrHideBackToTopButton() {
    if (window.scrollY > 300) {
        backToTopButton.classList.add("visible");
    } else {
        backToTopButton.classList.remove("visible");
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", showOrHideBackToTopButton);
backToTopButton.addEventListener("click", scrollToTop);

var themeButton = document.getElementById("theme-button");

function applyTheme(themeName) {
    if (themeName === "dark") {
        document.body.classList.add("dark-theme");
        themeButton.textContent = "Jasny motyw";
    } else {
        document.body.classList.remove("dark-theme");
        themeButton.textContent = "Ciemny motyw";
    }
}

function toggleTheme() {
    if (document.body.classList.contains("dark-theme")) {
        applyTheme("light");
        localStorage.setItem("theme", "light");
    } else {
        applyTheme("dark");
        localStorage.setItem("theme", "dark");
    }
}

var savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    applyTheme("dark");
}

themeButton.addEventListener("click", toggleTheme);
