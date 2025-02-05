document.addEventListener("DOMContentLoaded", function () {
    // Function to handle smooth scrolling
    function scrollToSection(event, targetId) {
        event.preventDefault(); // Prevent default anchor behavior
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Mapping buttons to their target sections
    const scrollMappings = [
        { selector: ".alanding", target: "landind" },
        { selector: ".aabout", target: "about" },
    ];

    // Attach event listeners to each button
    scrollMappings.forEach(mapping => {
        const button = document.querySelector(mapping.selector);
        if (button) {
            button.addEventListener("click", (event) => scrollToSection(event, mapping.target));
        }
    });
});
