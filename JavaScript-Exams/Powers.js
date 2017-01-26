function solve(args) {
	var k = +args[1];
	var numbers = args[2].split(' ').map(Number);
	var sum = 0;

	for (var i = 0; i < k; i += 1) {
		var transformNumbers = [];
		for (j = 0; j < numbers.length; j += 1) {
			let nextValue;
			if (j === 0) {
				nextValue = transform(numbers[j], numbers[j + 1], numbers[numbers.length - 1]);
			} else if (j === numbers.length - 1) {
				nextValue = transform(numbers[j], numbers[j - 1], numbers[0]);
			} else {
				nextValue = transform(numbers[j], numbers[j - 1], numbers[j + 1]);
			}
			transformNumbers.push(nextValue);
		}
		numbers = transformNumbers;
	}

	for (var num of numbers) {
		sum += num;
	}
	console.log(sum);

	function transform(num, left, right) {
		if (num === 0) {
			return Math.abs(left - right);
		} else if (num % 2 === 0) {
			return Math.max(left, right);
		} else if (num === 1) {
			return left + right;
		} else {
			return Math.min(left, right);
		}
	}
}

solve(['5', '1',
	'9 0 2 4 1'
])