const lightCheckbox = document.querySelector("input[name=light]");
const lightedDivs = document.querySelectorAll('.lighted');


const darkMode = (option, callback) => {
    lightedDivs.forEach(callback);
    window.localStorage.setItem('dark-mode', option);
}


(() => {
    if (window.localStorage.getItem('dark-mode') === 'on') {
        darkMode('on', div => div.classList.add('dark-mode'));
        lightCheckbox.checked = false;
    }
})();


lightCheckbox.addEventListener('change', () => {
    lightCheckbox.checked ?
        darkMode('off', div => div.classList.remove('dark-mode')) :
        darkMode('on', div => div.classList.add('dark-mode'));
});
