

// navbar toggle in mobile
const $navbar = document.querySelector("[data-navbar]");
const $navToggler = document.querySelector("[data-nav-toggler]");

// Check if elements are found before adding event listeners
if ($navbar && $navToggler) {
    $navToggler.addEventListener('click', () => $navbar.classList.toggle("active"));
}

// header scroll state
const $header = document.querySelector("[data-header]");
window.addEventListener("scroll", e => {
    if ($header) {
        $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
    }
});

// add to favorite button toggle
// add to favorite button toggle
const $toggleBtns = document.querySelectorAll("[data-toggle-btn]");
$toggleBtns.forEach($toggleBtn => {
    $toggleBtn.addEventListener("click", () => {
        $toggleBtn.classList.toggle("active");
    });
});
