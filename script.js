document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".button1").forEach(button => {
        button.style.width = button.getAttribute("data-width");
        button.style.height = button.getAttribute("data-height");
    });
    document.querySelectorAll(".button2").forEach(button => {
        button.style.width = button.getAttribute("data-width");
        button.style.height = button.getAttribute("data-height");
    });
});

