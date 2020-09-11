const switchLetters = hide => {
    let whiteLetters = document.querySelectorAll('.white-letter');
    console.log(whiteLetters);

    hide ? whiteLetters.forEach(value => value.classList.add('letter-hide')) :
        whiteLetters.forEach(value => value.classList.remove('letter-hide'));
};
