let number1=10
let number2=5

function add (number1, number2) {
	return number1 + number2;
}

add(number1, number2)

console.log((add)(-2,5))


/**
 *Take two names and concatenate them.
 *
 * @param string firstName The given name to concatenate.
 * @pram string lastName The family name to concatenate
 * @return string the full name of our person.
 */

function getFullName(firstName, lastName) {
	return firstName + lastName;
}

console.log(getFullName("Paul", "Sschulzetenberg"));
