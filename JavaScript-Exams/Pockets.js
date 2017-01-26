function solve(args) {

	var heights = args[0].split(' ').map(Number),
		sum = 0,
		i;
	for (i = 0; i < heights.length; i += 1) {
		if (isPocket(i, heights)) {
			sum += heights[i];
		}
	}

	console.log(sum);

	function isPeak(index, valley) {
		return valley[index] > valley[index - 1] && valley[index] > valley[index + 1];
	}

	function isValley(index, valley) {
		return valley[index] < valley[index - 1] && valley[index] < valley[index + 1];
	}

	function isPocket(index, heights) {
		return isValley(index, heights) && isPeak(index - 1, heights) && isPeak(index + 1, heights)
	}
}

solve([
	"53 20 1 30 2 40 3 10 1"
]);
solve([
	"53 20 1 30 30 2 40 3 10 1"
]);
solve(
	[
		"53 20 1 30 2 40 3 3 10 1"
	]
);

