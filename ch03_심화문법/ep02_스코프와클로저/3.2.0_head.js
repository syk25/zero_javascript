const number = [1, 3, 5, 7];
for (let i = 0; i < number.length; i++) {
    setTimeout(() => {
        console.log(number[i]);
    }, 1000 * (i + 1));
}

for (var i = 0; i < number.length; i++) {
    setTimeout(() => {
        console.log(number[i]);
    }, 1000 * (i + 1));
}

for (var i = 0; i < number.length; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000 * (i + 1));
}
