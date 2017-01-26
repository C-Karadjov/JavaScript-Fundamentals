function solve(args) {
	var a = +args[0],
		b = +args[1],
		c = +args[2],
		x1,
		x2;
	var disc = (b * b) - (4 * a * c);
	if (disc < 0) {
		return 'no real roots';
	} else if (!disc) {
		x1 = -b / (2 * a);
		return 'x1=x2=' + x1.toFixed(2);
	} else {
		x1 = (-b - Math.sqrt(disc)) / (2 * a);
		x2 = (-b + Math.sqrt(disc)) / (2 * a);
		return 'x1=' + x1.toFixed(2) + ';' + ' x2=' + x2.toFixed(2);
	}
}
console.log(solve(['2', '5', '-3']))