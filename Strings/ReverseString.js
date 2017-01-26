function reverseString(str) {
	var input = str[0];
	return input.split('').reverse().join('');
}
console.log(reverseString(['sample']));