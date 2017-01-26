function solve(args) {
	var str = args[0];
	var opening = str.match(/[\(\[\{]/g);
	var closing = str.match(/[\)\]\}]/g);
	if (opening.length === closing.length) {
		console.log('Correct');
	} else {
		console.log('Incorrect');
	}
}
solve(['((a+b)/5-d)']);
solve([')(a+b))']);