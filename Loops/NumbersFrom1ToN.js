function solve(args) {
	var result = '',
		i;
	for (i = 1; i <= args; i += 1) {
		result += i + ' ';
	}
	return result;
}
console.log(solve(4));