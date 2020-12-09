const numbers = [1, 2, 3, 4, 5, 6];

function sum(n) {
    const summation = n.reduce((prevValue, currentValue) => {
        return prevValue + currentValue;
    }, 0);
    return summation;
}
console.log(sum(numbers));