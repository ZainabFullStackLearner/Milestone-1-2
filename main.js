// Type assertion for elements
var skills = document.getElementById("skills");
var toggleButton = document.getElementById("toggleButton");
// Check if toggleButton is defined, then add event listener
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener("click", function () {
    // Check if skills is defined
    if (skills) {
        // Toggle display property
        if (skills.style.display === "none") {
            skills.style.display = "block";
        }
        else {
            skills.style.display = "none";
        }
    }
});
