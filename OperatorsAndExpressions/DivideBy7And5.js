function solve(args) {
	var result = false;
	if ((args % 7) || (args % 5)) {
		return result + ' ' + args;
	} else {
		result = true;
		return result + ' ' + args;
	}
}
console.log(divideBy7And5(7));