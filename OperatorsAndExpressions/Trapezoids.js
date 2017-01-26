function solve(args) {
	var a = parseFloat(args[0]);
	var b = parseFloat(args[1]);
	var h = parseFloat(args[2]);
	var area = h * ((a + b) / 2);
	return area.toFixed(7);
}
console.log(solve(['8.5', '4.3', '2.7']));