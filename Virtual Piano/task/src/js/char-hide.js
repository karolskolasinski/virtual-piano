const keysVisibilityCheckbox = document.querySelector("input[name=key-visibility]");
const chars = document.querySelectorAll('.char');

keysVisibilityCheckbox.addEventListener('change', () => {
    keysVisibilityCheckbox.checked ?
        chars.forEach(char => char.classList.remove('char-hide')) :
        chars.forEach(char => char.classList.add('char-hide'));
});
