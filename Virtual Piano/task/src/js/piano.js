const keys = {
    // normal keys
    'Tab': 'audio/C1.mp3',
    'KeyQ': 'audio/D1.mp3',
    'KeyW': 'audio/E1.mp3',
    'KeyE': 'audio/F1.mp3',
    'KeyR': 'audio/G1.mp3',
    'KeyT': 'audio/A1.mp3',
    'KeyY': 'audio/B1.mp3',
    'KeyU': 'audio/C2.mp3',
    'KeyI': 'audio/D2.mp3',
    'KeyO': 'audio/E2.mp3',
    'KeyP': 'audio/F2.mp3',
    'BracketLeft': 'audio/G2.mp3',
    'BracketRight': 'audio/A2.mp3',
    'Backslash': 'audio/B2.mp3',

    // sharp keys
    'Digit1': 'audio/C1-sharp.mp3',
    'Digit2': 'audio/D1-sharp.mp3',
    'Digit4': 'audio/F1-sharp.mp3',
    'Digit5': 'audio/G1-sharp.mp3',
    'Digit6': 'audio/A1-sharp.mp3',
    'Digit8': 'audio/C2-sharp.mp3',
    'Digit9': 'audio/D2-sharp.mp3',
    'Minus': 'audio/F2-sharp.mp3',
    'Equal': 'audio/G2-sharp.mp3',
    'Backspace': 'audio/A2-sharp.mp3',
};


document.onkeydown = t => {
    if (t.code === 'Tab') {
        return false;
    }
};


document.addEventListener('keydown', e => {
    if (e.code in keys) {
        new Audio(keys[e.code]).play();
        document.querySelector(`#${e.code}`).classList.add('active');
    }
});

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


document.addEventListener('touchend', e => {
    if (e.code in keys) {
        document.querySelector(`#${e.code}`).classList.remove('active');
    }
});


for (let key in keys) {
    document.querySelector(`#${key}`).addEventListener("click", () => {
        new Audio(keys[key]).play();
    });
}
