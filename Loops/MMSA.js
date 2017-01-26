function solve(args) {
	var sum = 0,
		max = +args[0],
		min = +args[0],
		avg = 0,
		elements = args.length,
		i;
	for (i = 0; i < elements; i += 1) {
		if (+args[i] >= max) {
			max = +args[i];
		}
		if (+args[i] <= min) {
			min = +args[i];
		}
		sum += +args[i];
	}
	avg = sum / elements;

	console.log('min=' + min.toFixed(2));
	console.log('max=' + max.toFixed(2));
	console.log('sum=' + sum.toFixed(2));
	console.log('avg=' + avg.toFixed(2));
}
solve(['2', '5', '4']);