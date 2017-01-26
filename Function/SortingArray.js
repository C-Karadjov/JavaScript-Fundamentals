function sortingArray(args) {
	var numbers = args[1].split(' ').map(Number);

	return selectionSort(numbers);

	function selectionSort(arr) {
		var smallest,
			i,
			j;
		for (i = 0; i < arr.length; i += 1) {
			smallest = +arr[i];
			for (j = i + 1; j < arr.length; j += 1) {
				if (+arr[j] < arr[i]) {
					smallest = +arr[j];
					arr[j] = +arr[i];
					arr[i] = smallest;
				}
			}
		}
		return arr.join(' ');
	}
}
console.log(sortingArray(['6', '3 4 1 5 2 6']));