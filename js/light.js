const light = document.querySelector("input[name=light]");


light.addEventListener('click', () => {
    if (light.checked) {
        document.querySelector('main').classList.remove('main-dark');
        document.querySelector('.main-title').classList.remove('main-title-white');
    } else {
        document.querySelector('main').classList.add('main-dark');
        document.querySelector('.main-title').classList.add('main-title-white');
    }
});
