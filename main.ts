// Type assertion for elements
const skills = document.getElementById("skills") as HTMLDivElement | null;
const toggleButton = document.getElementById("toggleButton") as HTMLButtonElement | null;

// Check if toggleButton is defined, then add event listener
toggleButton?.addEventListener("click", function () {
    // Check if skills is defined
    if (skills) {
        // Toggle display property
        if (skills.style.display === "none") {
            skills.style.display = "block";
        } else {
            skills.style.display = "none";
        }
    }
});







