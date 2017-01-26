function solve(args) {
	var firstNumber = +args[0],
		secondNumber = +args[1],
		thirdNumber = +args[2];
	var result;
	if (firstNumber > secondNumber && firstNumber > thirdNumber) {
		if (secondNumber > thirdNumber) {
			result = firstNumber + ' ' + secondNumber + ' ' + thirdNumber;
		} else {
			result = firstNumber + ' ' + thirdNumber + ' ' + secondNumber;
		}

	} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
		if (firstNumber > thirdNumber) {
			result = secondNumber + ' ' + firstNumber + ' ' + thirdNumber;
		} else {
			result = secondNumber + ' ' + thirdNumber + ' ' + firstNumber;
		}
	} else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
		if (firstNumber > secondNumber) {
			result = thirdNumber + ' ' + firstNumber + ' ' + secondNumber;
		} else {
			result = thirdNumber + ' ' + secondNumber + ' ' + firstNumber;
		}
	}
	console.log(result);
}
console.log(solve(['-2', '4', '3']));