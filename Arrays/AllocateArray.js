function solve(args) {

	var arr = [],
		n = +args[0],
		i;
	for (i = 0; i < n; i += 1) {
		arr.push(i * 5);
	}
	console.log(arr.join('\n'));
}
(solve(['5']));