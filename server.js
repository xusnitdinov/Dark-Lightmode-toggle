const btn = document.querySelector('#btn-clr');

if (!btn) {
    console.warn('Button not found');
} 
else {
    function updateButtonText() {
        if (document.body.classList.contains('dark-mode')) {
            btn.textContent = 'Light Mode';
        } else {
            btn.textContent = 'Dark Mode';
        }
    }

    btn.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        updateButtonText();

        btn.classList.add('animate-glow');

        setTimeout(() => {
            btn.classList.remove('animate-glow');
        }, 500);
    });

    updateButtonText();
}