// Attach a click event listener to the element with class "menu-toggle" to open and close menu
document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.getElementById("sidebar").classList.toggle("active");
    document.querySelector(".content").classList.toggle("active");
});
