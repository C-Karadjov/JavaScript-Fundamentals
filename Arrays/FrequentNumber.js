function solve(arr) {
	let i,
		j,
		number,
		count = 0,
		bestCount = 0;

	arr.splice(0, 1);

	for (i = 0; i < arr.length; i += 1) {
		for (j = i; j < arr.length; j += 1) {
			if (arr[i] === arr[j]) {
				count += 1;
			}
		}
		if (count > bestCount) {
			bestCount = count;
			number = +arr[i];
		}
		count = 0;
	}
	console.log(number + ' (' + bestCount + ' times)');
}
solve(['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']);