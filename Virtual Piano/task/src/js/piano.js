const pianoKeys = new Set('ASDFGHJWERTYU');

document.addEventListener("keydown", function (e) {
    if (pianoKeys.has(e.key.toUpperCase())) {
        new Audio("audio/" + e.key.toUpperCase() + ".mp3").play();
    }
})
