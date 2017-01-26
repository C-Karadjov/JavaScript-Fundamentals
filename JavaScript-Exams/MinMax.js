function solve(args) {
	var k = +args[1];
	var n = +args[0];
	var numbers = args[2].split(' ').map(Number);
	var arr = [];
	for (var i = 0; i < (numbers.length) - k + 1; i += 1) {
		var min = numbers[i];
		var max = numbers[i];
		for (var j = i; j < k + i; j += 1) {
			if (numbers[j] > max) {
				max = numbers[j]
			} else if (numbers[j] < min) {
				min = numbers[j];
			}
		}
		arr.push(min + max);

	}
	arr = arr.toString();
	console.log(arr);
}

solve([
	'4',
	'2',
	'1 3 1 8'
]);
solve([
	'5',
	'3',
	'7 7 8 9 10'
]);