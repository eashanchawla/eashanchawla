document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully!');

    const themeSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });
});
