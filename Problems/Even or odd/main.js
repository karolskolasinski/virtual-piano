function checkEvenOrOdd(numbers) {
    // write your code here
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            break;
        }

        console.log((numbers[i] % 2 === 0) ? "even" : "odd");
    }
}
