let array = [];

array[0] = 0;
array[1] = 1;

for (let i = 2; i < 7; i++) {
    array[i] = array[i - 2] + array[i - 1];
}

for (let i = 0; i < 7; i++) {
    console.log(array.shift());
}
