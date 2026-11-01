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
