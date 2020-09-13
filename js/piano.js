document.onkeydown = t => {
    if (t.code === 'Tab') {
        return false;
    }
};

const keys = {
    // normal keys
    'Tab': '/Virtual%20Piano/task/src/audio/C1.mp3',
    'KeyQ': '/Virtual%20Piano/task/src/audio/D1.mp3',
    'KeyW': '/Virtual%20Piano/task/src/audio/E1.mp3',
    'KeyE': '/Virtual%20Piano/task/src/audio/F1.mp3',
    'KeyR': '/Virtual%20Piano/task/src/audio/G1.mp3',
    'KeyT': '/Virtual%20Piano/task/src/audio/A1.mp3',
    'KeyY': '/Virtual%20Piano/task/src/audio/B1.mp3',
    'KeyU': '/Virtual%20Piano/task/src/audio/C2.mp3',
    'KeyI': '/Virtual%20Piano/task/src/audio/D2.mp3',
    'KeyO': '/Virtual%20Piano/task/src/audio/E2.mp3',
    'KeyP': '/Virtual%20Piano/task/src/audio/F2.mp3',
    'BracketLeft': '/Virtual%20Piano/task/src/audio/G2.mp3',
    'BracketRight': '/Virtual%20Piano/task/src/audio/A2.mp3',
    'Backslash': '/Virtual%20Piano/task/src/audio/B2.mp3',

    // sharp keys
    'Digit1': '/Virtual%20Piano/task/src/audio/C1-sharp.mp3',
    'Digit2': '/Virtual%20Piano/task/src/audio/D1-sharp.mp3',
    'Digit4': '/Virtual%20Piano/task/src/audio/F1-sharp.mp3',
    'Digit5': '/Virtual%20Piano/task/src/audio/G1-sharp.mp3',
    'Digit6': '/Virtual%20Piano/task/src/audio/A1-sharp.mp3',
    'Digit8': '/Virtual%20Piano/task/src/audio/C2-sharp.mp3',
    'Digit9': '/Virtual%20Piano/task/src/audio/D2-sharp.mp3',
    'Minus': '/Virtual%20Piano/task/src/audio/F2-sharp.mp3',
    'Equal': '/Virtual%20Piano/task/src/audio/G2-sharp.mp3',
    'Backspace': '/Virtual%20Piano/task/src/audio/A2-sharp.mp3',
};


document.addEventListener('keydown', e => {
    if (e.code in keys) {
        new Audio(keys[e.code]).play();
        document.querySelector(`#${e.code}`).classList.add('active');
    }
});


document.addEventListener('keyup', e => {
    if (e.code in keys) {
        document.querySelector(`#${e.code}`).classList.remove('active');
    }
});


for (let key in keys) {
    document.querySelector(`#${key}`).addEventListener("click", () => {
        new Audio(keys[key]).play();
    });
}
