
i=VarInt

function lbsToG (i * 453.59237) {
	return i * 453.59237
}

function ozToG(i * 28.3495231) {
	return i * 28.3495231
}

function kgToG(i * 1000) {
	return i * 1000
}

function mgToG(i * .001) {
	return i * .001
}

If input in lbs, function lbsToG

If input in oz, function ozToG

If input in kg, function kgToG

if input in mg, function mgToG



// actual answers start here lol//
function convertToGrams (weight, units) {


	if (units === 'lbs') {
		return weight * 453.592
	}

	else if (units === 'oz') {
		return weight * 28.349;
	}

	else if (units === kg) {
		return weight * 1000
	}

	else if (units === g) {
		return weight
	}

	else if (units === mg) {
		return weight * .001
	}

}

console.log("We passed the return")





//question 2 (jesu!)//

function sumFactors(number) {
	sum = 0
	for(i = number; i> 0; i--) {
		if(number % i === 0){
			sum = i + sum;

		}
	}
	return sum;
}

console.log(sumFactors(number:1));
