function solve(args) {
	var x = parseFloat(args[0]);
	var y = parseFloat(args[1]);
	var distance = Math.sqrt(x * x + y * y);
	var radius = 2;

	if (distance <= radius) {
		return 'yes ' + distance.toFixed(2);
	} else {
		return 'no ' + distance.toFixed(2);
	}
}
console.log(solve(['-1', '2']));