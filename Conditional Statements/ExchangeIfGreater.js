function solve(args) {
	var a = parseFloat(args[0]);
	var b = parseFloat(args[1]);
	if (a > b) {
		return b + ' ' + a;
	} else {
		return a + ' ' + b;
	}
}
console.log(solve(['5.5', '4.5']));