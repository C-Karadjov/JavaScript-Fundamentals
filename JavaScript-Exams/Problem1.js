function solve(args) {
	var numbers = args.slice(1).map(Number),
		current,
		result = 0;

	for (var i = 0; i < numbers.length; i += 1) {
		current = numbers[i];
		if (current % 2 !== 0) {
			if (result === 0) {
				result = 1;
				result *= current;
			} else {
				result *= current;
			}
		} else if (current % 2 === 0) {
			result += current;
			i += 1;
		}
		result = result % 1024;
	}
	console.log(result);
}

solve([
	'4',
	'4',
	'3',
	'1',
	'5'
]);

solve([
	'10',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'0'
])

solve([
	'9',
	'9',
	'9',
	'9',
	'9',
	'9',
	'9',
	'9',
	'9',
	'9'
]);