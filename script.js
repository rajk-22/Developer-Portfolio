
console.log("Welcome to Raja Kumari's Portfolio!");

const navigationLinks = document.querySelectorAll(".navbar a");

navigationLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("Navigating to:", link.textContent);
    });
});
