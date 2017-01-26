function solve(args) {
	var width = +args[0];
	var height = +args[1];
	var perimeter = width * height;
	var area = 2 * (width + height);
	return perimeter.toFixed(2) + ' ' + area.toFixed(2);
}

console.log(rectangle(3, 4));