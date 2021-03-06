function printIndex(args) {

    var numbers = args[1].split(' ').map(Number);

    return findIndex(numbers);

    function findIndex(numArray) {
        var i, len, index = -1;
        for (i = 1, len = numArray.length; i < len - 1; i += 1) {
            if (numArray[i] > numArray[i - 1] && numArray[i] > numArray[i + 1]) {
                index = i;
                break;
            }
        }
        return index;
    }
}

console.log(printIndex(['6', '-26 -25 -28 31 2 27']));
console.log(printIndex(['5', '1 2 3 4 5']));