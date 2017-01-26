function solve(args) {
	var numbers = args.slice(1).map(Number),
		sum;
	bestSum = Number.MIN_VALUE;

	for (var i = 0; i < numbers.length; i += 1) {
		sum = 0;
		for (var j = i; j < numbers.length; j += 1) {
			sum += numbers[j];
			bestSum = Math.max(bestSum, sum);
		}
	}
	console.log(bestSum);
}

solve(['8', '1', '6', '-9', '4', '4', '-2', '10', '-1']);