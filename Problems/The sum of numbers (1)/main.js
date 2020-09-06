function sum(numbers) {
    // write your code here
    let sum = 0;
    let n = 0;

    while (numbers[n] !== 0) {
        sum += numbers[n];
        n++;
    }

    return sum;
}
