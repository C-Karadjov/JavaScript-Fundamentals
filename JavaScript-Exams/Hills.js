function solve(params) {
    var s = params[0].split(' ').map(Number);
    var stones = 0;
    var sumMax = 0;

    for (var i = 1, len = s.length; i <= len; i += 1) {
        if (s[i - 1] > s[i] || s[i - 1] < s[i]) {
            stones += 1;
        }
        if (stones > sumMax) {
            sumMax = stones;
        }
        if (s[i - 1] < s[i] && s[i] > s[i + 1]) {
            stones = 0;
        }
    }
    console.log(sumMax);
}
solve(['5 1 7 4 8']);
solve(['5 1 7 6 3 6 4 2 3 8']);

//Another way:

function solve(params) {
    var land = params[0].split(' ').map(Number),
        tempBestCount = 1,
        bestCount = 1,
        len = land.length,
        isOnTop = false, //if is not on top - count the rocks
        i;

    for (i = 1; i < len - 1; i += 1) {

        if (land[i - 1] < land[i] && land[i] > land[i + 1]) { //onTop here
            i += 1; //move back to the next stone
            tempBestCount = 1; //it's a new beginning so temp gets back to 1
            isOnTop = false; //we are not on top anymore
        }
        if (!isOnTop) {
            tempBestCount += 1;
        }

        if (tempBestCount > bestCount) {
            bestCount = tempBestCount;
        }

    }
    console.log(bestCount);

}

solve(['5 1 7 4 8']);
solve(['5 1 7 6 3 6 4 2 3 8']);