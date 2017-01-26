function getLargestNumber(args) {
	var numbers = args[0].split(' '),
		firstNumber = +numbers[0],
		secondNumber = +numbers[1],
		thirdNumber = +numbers[2];

	if (thirdNumber >= getMax(firstNumber, secondNumber)) {
		return thirdNumber;
	} else {
		return getMax(firstNumber, secondNumber);
	}

	function getMax(firstNumber, secondNumber) {
		if (firstNumber >= secondNumber) {
			return firstNumber;
		} else {
			return secondNumber;
		}
	}
}
console.log(getLargestNumber(['10 1 6']));