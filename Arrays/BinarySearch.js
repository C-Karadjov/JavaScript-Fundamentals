function solve(arr) {
	let minIndex = 0,
		maxIndex,
		mid,
		x;
	x = +arr.pop();
	arr.splice(0, 1);
	maxIndex = arr.length - 1;

	while (minIndex <= maxIndex) {
		mid = (minIndex + maxIndex) / 2 | 0;
		if (+arr[mid] === x) {
			return mid;
		} else if (+arr[mid] > x) {
			maxIndex = mid - 1;
		} else {
			minIndex = mid + 1;
		}
	}
	return '-1'
}
console.log(solve(['10', '1', '2', '4', '8', '16', '16', '32', '16', '77', '99', '16']));