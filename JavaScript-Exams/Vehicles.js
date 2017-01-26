function solve(args) {
	var s = +args[0],
		count = 0,
		cars = 4,
		trucks = 10,
		trikes = 3;

	for (var i = 0; i * cars <= s; i += 1) {
		for (var j = 0; j * trucks + i * cars <= s; j += 1) {
			for (k = 0; k * trikes + i * cars + j * trucks <= s; k += 1) {
				if (i * cars + j * trucks + k * trikes === s) {
					count += 1;
				}
			}
		}
	}
	console.log(count);
}

solve(['7']);
solve(['10']);