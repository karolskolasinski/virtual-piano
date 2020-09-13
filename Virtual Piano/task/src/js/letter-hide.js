const checkbox = document.querySelector("input[name=key-visibility]");


checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
        switchLetters('.white-letter', false);
        switchLetters('.black-letter', false);
    } else {
        switchLetters('.white-letter', true);
        switchLetters('.black-letter', true);
    }
});

const switchLetters = (lettersType, hide) => {
    const letters = document.querySelectorAll(lettersType);

    hide ? letters.forEach(value => value.classList.add('letter-hide')) :
        letters.forEach(value => value.classList.remove('letter-hide'));
};
