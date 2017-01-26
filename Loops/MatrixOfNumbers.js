function solve(args) {
	var row,
		col,
		result = '';
	num = +args[0];
	for (row = 1; row <= num; row += 1) {
		for (col = row; col < num + row; col += 1) {
			result += col + ' ';
		}
		result += '\n';
	}
	return result;
}
console.log(solve(['4']))