const keysVisibilityCheckbox = document.querySelector("input[name=key-visibility]");
const chars = document.querySelectorAll('.char');

(() => {
    if (window.localStorage.getItem('char-hide') === 'on') {
        chars.forEach(div => div.classList.add('char-hide'));
        keysVisibilityCheckbox.checked = false;
    }
})();

keysVisibilityCheckbox.addEventListener('change', () => {
    if (keysVisibilityCheckbox.checked) {
        chars.forEach(char => char.classList.remove('char-hide'));
        window.localStorage.setItem('char-hide', 'off');
    } else {
        chars.forEach(char => char.classList.add('char-hide'));
        window.localStorage.setItem('char-hide', 'on');
    }
});
