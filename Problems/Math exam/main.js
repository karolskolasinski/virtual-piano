function passingExam(myPoints) {
    return new Promise(function (resolve, reject) {
        // write your function here
        (myPoints >= 90) ? resolve("You are enrolled!") :
            reject("Sorry, you haven't passed the Math exam");
    });
}
