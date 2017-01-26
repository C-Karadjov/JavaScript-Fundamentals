function replaceTags(args) {
	var text = args[0],
		searchFor = /<a href="(.*?)">(.*?)<\/a>/g;

	text = text.replace(searchFor, '[$2]($1)');

	console.log(text);
}

replaceTags(['<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>']);