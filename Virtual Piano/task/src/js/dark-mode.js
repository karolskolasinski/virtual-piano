const lightCheckbox = document.querySelector("input[name=light]");
const lightedDivs = document.querySelectorAll('.lighted');

(() => {
    if (window.localStorage.getItem('dark-mode') === 'on') {
        lightedDivs.forEach(div => div.classList.add('dark-mode'));
        lightCheckbox.checked = false;
    }
})();

lightCheckbox.addEventListener('change', () => {
    if (lightCheckbox.checked) {
        lightedDivs.forEach(div => div.classList.remove('dark-mode'));
        window.localStorage.setItem('dark-mode', 'off');
    } else {
        lightedDivs.forEach(div => div.classList.add('dark-mode'));
        window.localStorage.setItem('dark-mode', 'on');
    }
});
