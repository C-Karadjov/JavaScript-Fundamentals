function solve(args) {
	var num = +args[0];
	var thirdDigit = ((num % 1000) / 100) | 0;
	if (thirdDigit === 7) {
		return true;
	} else {
		return false + ' ' + thirdDigit;
	}
}