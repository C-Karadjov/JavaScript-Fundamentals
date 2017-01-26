function solve(args) {
	var result = '',
		i,
		replaced;
	for (i = 0; i < args.length; i += 1) {
		replaced = args[i].replace(/<(?:.|\n)*?>/gm, '').trim();
		result += replaced;
	}
	console.log(result);
}
solve([
	'<html>',
	'  <head>',
	'    <title>Sample site</title>',
	'  </head>',
	'  <body>',
	'    <div>text',
	'      <div>more text</div>',
	'      and more...',
	'    </div>',
	'    in body',
	'  </body>',
	'</html>'
]);