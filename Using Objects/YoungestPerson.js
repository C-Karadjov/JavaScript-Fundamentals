function findYoungest(args) {
	var i, j, len, youngest, person = {},
		arrayPeople = [];

	for (i = 0, len = args.length; i < len; i += 3) {
		person = createPerson(args[i], args[i + 1], +args[i + 2]);
		arrayPeople.push(person);
	}

	youngest = arrayPeople[0];

	for (i = 0; i < arrayPeople.length; i += 1) {
		if (arrayPeople[i].age < youngest.age) {
			youngest = arrayPeople[i];
		}
	}

	return youngest.firstname + ' ' + youngest.lastname;

	function createPerson(firstname, lastname, age) {
		return {
			firstname: firstname,
			lastname: lastname,
			age: age
		};
	}
}

console.log(findYoungest(['Gosho', 'Petrov', '32', 'Bay', 'Ivan', '81', 'John', 'Doe', '42']));
console.log(findYoungest(['Penka', 'Hristova', '61', 'System', 'Failiure', '88', 'Bat', 'Man', '16', 'Malko', 'Kote', '72']));