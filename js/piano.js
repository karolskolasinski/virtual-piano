document.onkeydown = t => {
    if (t.code === 'Tab') {
        return false;
    }
};

const keys = {
    // normal keys
    'Tab': new Audio('Virtual%20Piano/task/src/audio/C1.mp3'),
    'KeyQ': new Audio('Virtual%20Piano/task/src/audio/D1.mp3'),
    'KeyW': new Audio('Virtual%20Piano/task/src/audio/E1.mp3'),
    'KeyE': new Audio('Virtual%20Piano/task/src/audio/F1.mp3'),
    'KeyR': new Audio('Virtual%20Piano/task/src/audio/G1.mp3'),
    'KeyT': new Audio('Virtual%20Piano/task/src/audio/A1.mp3'),
    'KeyY': new Audio('Virtual%20Piano/task/src/audio/B1.mp3'),
    'KeyU': new Audio('Virtual%20Piano/task/src/audio/C2.mp3'),
    'KeyI': new Audio('Virtual%20Piano/task/src/audio/D2.mp3'),
    'KeyO': new Audio('Virtual%20Piano/task/src/audio/E2.mp3'),
    'KeyP': new Audio('Virtual%20Piano/task/src/audio/F2.mp3'),
    'BracketLeft': new Audio('Virtual%20Piano/task/src/audio/G2.mp3'),
    'BracketRight': new Audio('Virtual%20Piano/task/src/audio/A2.mp3'),
    'Backslash': new Audio('Virtual%20Piano/task/src/audio/B2.mp3'),

    // sharp keys
    'Digit1': new Audio('Virtual%20Piano/task/src/audio/C1-sharp.mp3'),
    'Digit2': new Audio('Virtual%20Piano/task/src/audio/D1-sharp.mp3'),
    'Digit4': new Audio('Virtual%20Piano/task/src/audio/F1-sharp.mp3'),
    'Digit5': new Audio('Virtual%20Piano/task/src/audio/G1-sharp.mp3'),
    'Digit6': new Audio('Virtual%20Piano/task/src/audio/A1-sharp.mp3'),
    'Digit8': new Audio('Virtual%20Piano/task/src/audio/C2-sharp.mp3'),
    'Digit9': new Audio('Virtual%20Piano/task/src/audio/D2-sharp.mp3'),
    'Minus': new Audio('Virtual%20Piano/task/src/audio/F2-sharp.mp3'),
    'Equal': new Audio('Virtual%20Piano/task/src/audio/G2-sharp.mp3'),
    'Backspace': new Audio('Virtual%20Piano/task/src/audio/A2-sharp.mp3'),
};


document.addEventListener('keydown', e => {
    if (e.code in keys) {
        keys[e.code].currentTime = 0;
        keys[e.code].play();
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
        keys[key].currentTime = 0;
        keys[key].play();

    });
}


document.addEventListener('touchstart', e => {
    if (e.code in keys) {
        keys[e.code].currentTime = 0;
        keys[e.code].play();
        document.querySelector(`#${e.code}`).classList.add('active');
    }
});


// document.addEventListener('touchend', e => {
//     if (e.code in keys) {
//         document.querySelector(`#${e.code}`).classList.remove('active');
//     }
// });
