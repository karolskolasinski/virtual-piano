const lightCheckbox = document.querySelector("input[name=light]");
const lightedDivs = document.querySelectorAll('.lighted');

lightCheckbox.addEventListener('change', () => {
    lightCheckbox.checked ?
        lightedDivs.forEach(div => div.classList.remove('dark-mode')) :
        lightedDivs.forEach(div => div.classList.add('dark-mode'));
});
