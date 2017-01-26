function planarCoordinates(args) {
	var coordinates = [{
		X1: +args[0],
		Y1: +args[1],
		X2: +args[2],
		Y2: +args[3]
	}, {
		X1: +args[4],
		Y1: +args[5],
		X2: +args[6],
		Y2: +args[7]
	}, {
		X1: +args[8],
		Y1: +args[9],
		X2: +args[10],
		Y2: +args[11]
	}];
	var a, b, c;
	a = Math.sqrt(Math.pow((coordinates[0].X1 - coordinates[0].X2), 2) + Math.pow((coordinates[0].Y1 - coordinates[0].Y2), 2));
	b = Math.sqrt(Math.pow((coordinates[1].X1 - coordinates[1].X2), 2) + Math.pow((coordinates[1].Y1 - coordinates[1].Y2), 2));
	c = Math.sqrt(Math.pow((coordinates[2].X1 - coordinates[2].X2), 2) + Math.pow((coordinates[2].Y1 - coordinates[2].Y2), 2));

	console.log(a.toFixed(2));
	console.log(b.toFixed(2));
	console.log(c.toFixed(2));

	if (a + b > c && a + c > b && b + c > a) {
		console.log('Triangle can be built');
	} else {
		console.log('Triangle can not be built');
	}
}

planarCoordinates([
	'5', '6', '7', '8',
	'1', '2', '3', '4',
	'9', '10', '11', '12'
]);