document.getElementById('fontSizeSlider').addEventListener('input', function() {
    document.documentElement.style.fontSize = this.value + 'px';
});
document.addEventListener('DOMContentLoaded', () => {
    const contrastToggle = document.getElementById('contrastToggle');
    const fontSizeSlider = document.getElementById('fontSizeSlider');
    const root = document.documentElement;

    // Adjust font size based on the slider
    fontSizeSlider.addEventListener('input', () => {
        const size = fontSizeSlider.value + 'px';
        root.style.setProperty('--text-size', size);
    });

    // Initialize default font size
    root.style.setProperty('--text-size', fontSizeSlider.value + 'px');
});
document.addEventListener('DOMContentLoaded', () => {
    const contrastToggle = document.getElementById('contrastToggle');

    // Toggle the high-contrast mode
    contrastToggle.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        // Simulate form submission (replace with your actual submission logic)
        console.log('Form submitted', { name, email, message });
        alert('Thank you for your message!');

        // Reset form after submission
        contactForm.reset();
    });
});
function goBack() {
    window.history.back();
}
