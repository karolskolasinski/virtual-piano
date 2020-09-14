const keyVisibility = document.querySelector("input[name=key-visibility]");
const letters = document.querySelectorAll('.char');

keyVisibility.addEventListener('click', () => {
    keyVisibility.checked ?
        letters.forEach(value => value.classList.remove('char-hide')) :
        letters.forEach(value => value.classList.add('char-hide'));
});
