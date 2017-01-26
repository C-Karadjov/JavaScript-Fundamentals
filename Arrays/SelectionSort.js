function solve(arr) {
    let smallest,
        i,
        j;

    arr.splice(0, 1);
    for (i = 0; i < arr.length; i += 1) {
    	smallest= +arr[i];
        for (j = i+1; j < arr.length; j += 1) {
            if (+arr[j] < arr[i]) {
                smallest = +arr[j];
                arr[j]= +arr[i];
                arr[i]=smallest;
            }
        }
    }
    console.log(arr.join('\n'));
}


solve(['6', '3', '4', '3', '5', '2', '6']);
