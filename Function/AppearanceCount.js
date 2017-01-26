function printResult(args) {
	var numbers = args[1].split(' ').map(Number),
		x = +args[2];
	return countAppearance(numbers, x)

	function countAppearance(arr, x) {
		var i,
			count = 0;
		for (i = 0; i < arr.length; i += 1) {
			if (x == arr[i]) {
				count += 1;
			}
		}
		return count;
	}
}
console.log(printResult(['8', '28 6 21 6 -7856 73 73 -56', '21']));