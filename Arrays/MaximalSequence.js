function longest(args) {
	var count = 1,
		maxSeq = 0,
		i;
	args.splice(0, 1);

	for (i = 0; i < args.length; i += 1) {
		if (+args[i] === +args[i + 1]) {
			count += 1;
			if (count > maxSeq) {
				maxSeq = count;
			}
		} else {
			count = 1;
		}
	}
	console.log(maxSeq);
}
longest(['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1']);