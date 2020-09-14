const keysVisibilityCheckbox = document.querySelector("input[name=key-visibility]");
const chars = document.querySelectorAll('.char');


const charHide = (option, callback) => {
    chars.forEach(callback);
    window.localStorage.setItem('char-hide', option);
};


(() => {
    if (window.localStorage.getItem('char-hide') === 'on') {
        charHide('on', char => char.classList.add('char-hide'));
        keysVisibilityCheckbox.checked = false;
    }
})();


keysVisibilityCheckbox.addEventListener('change', () => {
    keysVisibilityCheckbox.checked ?
        charHide('off', char => char.classList.remove('char-hide')) :
        charHide('on', char => char.classList.add('char-hide'));
});
