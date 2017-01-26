function solve(args) {
	var firstArr = args.splice(0, 1),
		secondArr = args.splice(0, 1);

	if (firstArr < secondArr) {
		console.log('<');
	} else if (firstArr > secondArr) {
		console.log('>');
	} else {
		console.log('=');
	}
}
solve(['hello', 'halo']);
solve(['food', 'food']);
solve(['tes', 'test']);