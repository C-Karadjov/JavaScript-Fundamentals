function solve(args) {
	var a = +args[0];
	var b = +args[1];
	var c = +args[2];

	if (!a || !b || !c) {
		return '0';
	} else if ((a < 0 && b < 0 && c < 0) || (a < 0 && b > 0 && c > 0) || (b < 0 && a > 0 && c > 0) || (c < 0 && a > 0 && b > 0)) {
		return '-';
	} else {
		return '+';
	}
}
console.log(solve(['-1', '-2.5', '4']))