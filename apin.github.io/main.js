/*document.getElementById('contrastToggle').addEventListener('click', function() {
    document.body.classList.toggle('high-contrast');
});**/

document.getElementById('fontSizeSlider').addEventListener('input', function() {
    document.documentElement.style.fontSize = this.value + 'px';
});
document.addEventListener('DOMContentLoaded', () => {
    const contrastToggle = document.getElementById('contrastToggle');
    const fontSizeSlider = document.getElementById('fontSizeSlider');
    const root = document.documentElement;

    // Toggle high contrast mode
   /* contrastToggle.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });**/

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
