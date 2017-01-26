function solve(args) {
	var str = args[0];
	var result = str.replace(/ /g, '&nbsp;');
	return result;
}
console.log(solve(['hello world']));