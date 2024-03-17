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
function submitForm() {
    const form = document.getElementById('myForm');
    const formData = new FormData(form);
    for (let [key, value] of formData.entries()) {
        localStorage.setItem(key, value);
    }
    alert('Form submitted!');
}

// Optional: If you want to clear the form and local storage together
function clearFormAndStorage() {
    localStorage.clear();
    document.getElementById('myForm').reset();
}

