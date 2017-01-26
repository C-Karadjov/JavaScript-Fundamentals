function solve(args) {
	var numbers = args.slice(1).map(Number),
		count = 1;

	for (var i = 1; i < numbers.length; i += 1) {
		if (numbers[i - 1] > numbers[i]) {
			count += 1;
		}
	}
	console.log(count);
}

solve(['7', '1', '2', '-3', '4', '4', '0', '1']);
solve(['6', '1', '3', '-5', '8', '7', '-6']);