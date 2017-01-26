function solve(args) {
	var numbers = args[0].split(" ").map(Number);
	var maxSum = -1;
	current = 0;

	for (var i = 0; i < numbers.length; i += 1) {
		current += numbers[i];
		if (i === numbers.length - 1) {
			maxSum = Math.max(maxSum, current);
		} else if (numbers[i] > numbers[i - 1] && numbers[i] > numbers[i + 1]) {
			maxSum = Math.max(maxSum, current);
			current = numbers[i];
		}
	}
	console.log(maxSum);
}
solve([
	"5 1 7 4 8"
]);