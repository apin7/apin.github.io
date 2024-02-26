document.getElementById("namePromptButton").addEventListener("click", function() {
    var name = prompt("Please enter your name:");
    document.getElementById("displayName").textContent = "Hello, " + name;
});
document.getElementById("myImage").addEventListener("click", function() {
    if (this.style.width === "200px") {
        this.style.width = "100px"; // Shrink back to the original size
    } else {
        this.style.width = "200px"; // Enlarge the image
    }
});

