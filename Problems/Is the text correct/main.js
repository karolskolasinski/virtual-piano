const isCorrectText = true;
// write your function here

let checkingText = new Promise(function (resolve, reject) {
    isCorrectText ? resolve("Your text is correct") : reject(new Error());
});
