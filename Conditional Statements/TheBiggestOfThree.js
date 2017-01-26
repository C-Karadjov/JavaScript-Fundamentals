function solve(args) {
	var firstNumber = +args[0],
		secondNumber = +args[1],
		thirdNumber = +args[2];
	var biggest;
	if (firstNumber >= secondNumber && firstNumber >= thirdNumber) {
		biggest = firstNumber;
		return biggest;
	} else if (secondNumber >= firstNumber && secondNumber >= thirdNumber) {
		biggest = secondNumber;
		return biggest;
	} else if (thirdNumber >= firstNumber && thirdNumber >= secondNumber) {
		biggest = thirdNumber;
		return biggest;
	}
}

console.log(solve(['-0.1', '-2.5', '-0.5']));