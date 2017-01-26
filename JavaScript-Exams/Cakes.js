function solve(args) {
	var s = +args[0],
		c1 = +args[1],
		c2 = +args[2],
		c3 = +args[3],
		i, j, k, price,
		sum = 0;

	for (i = 0; i <= s / c1 + 1; i += 1) {
		for (j = 0; j <= s / c2 + 1; j += 1) {
			for (k = 0; k <= s / c3 + 1; k += 1) {
				price = i * c1 + j * c2 + k * c3;
				if (price < s) {
					sum = Math.max(sum, price);
				}
			}
		}
	}
	console.log(sum);
}

solve(['110', '13', '15', '17']);
solve(['20', '11', '200', '300']);
solve(['110', '19', '29', '39']);