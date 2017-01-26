function solve(args) {
	var number = parseInt(args[0]);
	if (number <= 1) {
		return false;
	} else {
		for (var i = 2, range = number / 2; i <= range; i += 1) {
			if (number % i === 0) {
				return false;
				break;
			}
		}
		return true;
	}
}
console.log(solve(['1']))