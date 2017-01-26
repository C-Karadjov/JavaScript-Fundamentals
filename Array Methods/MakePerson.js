function makePerson(firstName, lastName, age, gender) {
	return {

		firstName: firstName,
		lastName: lastName,
		age: age,
		gender: gender === 'female' ? true : false
	}
}

var persons = [
	makePerson('Ivan', 'Georgiev', 25, 'male'),
	makePerson('Georgi', 'Ivanov', 23, 'male'),
	makePerson('Stela', 'Genova', 28, 'female'),
	makePerson('Ilian', 'Stoilov', 17, 'male'),
	makePerson('Elena', 'Koleva', 21, 'female'),
	makePerson('Nina', 'Spasova', 16, 'female'),
	makePerson('Atanas', 'Dichev', 31, 'male'),
	makePerson('Anton', 'Gadzhev', 29, 'male'),
	makePerson('Silvia', 'Lazarova', 26, 'female'),
	makePerson('Paolina', 'Angelova', 23, 'female')
]

peopleOfAge();
underagePeople();
avarageAgeOfFemale();
youngestMalePerson();

function peopleOfAge() {
	var result = persons.every(function(persons) {
		return persons.age >= 18;
	})
	console.log('All peope are 18+ : ' + result);
}

function underagePeople() {
	var result = persons.filter(p => p.age < 18)
		.forEach(p => console.log(p));
}

function avarageAgeOfFemale() {
	var counter = 0;
	var result = persons.filter(function(persons) {
		return persons.gender === true;
	}).reduce(function(sum, persons) {
		counter += 1;
		return sum + persons.age;
	}, 0)
	result = result / counter;
	console.log('Average age of all females is : ' + result);
}

function youngestMalePerson() {
	var result = persons.sort(function(a, b) {
		return a.age - b.age;
	}).find(function(persons) {
		return persons.gender === false;
	})
	console.log('Youngest male person is : ' + result.firstName + ' ' + result.lastName);
}