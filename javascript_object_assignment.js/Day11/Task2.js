const toggleBtn = document.getElementById('toggleModeBtn');
let isDarkMode = false;
toggleBtn.addEventListener('click', function() {
    if(isDarkMode){
        document.body.classList.remove('black-mode');
        document.body.classList.add('white-mode');
        toggleBtn.textContent = 'Switch to dark mode';
        isDarkMode = false;
    } else {
        document.body.classList.remove('white-mode');
        document.body.classList.add('black-mode');
        toggleBtn.textContent = 'Switch to light mode';
        isDarkMode = true
    }
});