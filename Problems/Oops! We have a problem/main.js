function hasDownloaded(value) {
    const promise = new Promise(function (resolve, reject) {
        if (value === "true") {
            resolve("Now you can watch the video!");
        } else {
            reject("Oops! An error occurs");
        }
    });

    // return promise.then(function (response) {
    //     console.log(response)
    // }).catch(function (error) {
    //     console.log(error)
    // })

    return promise.then(console.log).catch(console.log);
}
