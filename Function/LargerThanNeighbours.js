function largerThenNeighbours(args) {
	var numbers = args[1].split(' ').map(Number);
	return checkNeighboursElements(numbers);

	function checkNeighboursElements(arr) {
		var i,
			len,
			counter = 0,
			before,
			currNum,
			afeter;

		for (i = 1, len = arr.length; i < len - 1; i += 1) {
			before = arr[i - 1];
			currNum = arr[i];
			afeter = arr[i + 1];
			if (currNum > before && currNum > afeter) {
				counter += 1;
			}
		}
		return counter;
	}
}

console.log(largerThenNeighbours(['6', '-26 -25 -28 31 2 27']));