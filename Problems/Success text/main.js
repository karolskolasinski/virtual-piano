const isGoodWeather = true;
const promise = new Promise(function (resolve, reject) {
    if (isGoodWeather) {
        resolve("You should go to the beach!");
    }
});

const successText = promise.then(response => console.log(response));
