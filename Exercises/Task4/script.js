function zipIt(first, second) {
	//declare vars for both input params which convert them into string and split them
	let firstSplit = first.toString().split("")
	let secondSplit = second.toString().split("")
	let temp
	var newArray
	//create if statement to check length between params and assign them into temp while one of lenghts is longer than another
	if (firstSplit.length >= secondSplit.length) {
		temp = firstSplit
	} else {
		temp = secondSplit
	}
	//create loop for every element in temp after assign split variables based on if statement above
	for (let i = 0; i < temp.length; i++) {
		//check if first input value is undefined and second isn't, if thats true then assign element of second input into new Array
		if (firstSplit[i] == undefined && secondSplit[i] != undefined) {
			newArray += secondSplit[i]
			//check if first input value isn't undefined and second is, if thats true then assign element of first input into new Array
		} else if (firstSplit[i] != undefined && secondSplit[i] == undefined) {
			newArray += firstSplit[i]
			//check if new Array value isn't undefined, if thats true then assign elements of first input into new Array, then assign elements of second input into new Array also
		} else if (newArray != undefined) {
			newArray += firstSplit[i]
			newArray += secondSplit[i]
			//check if new Array is undefined, if thats true then compare a values of first input to new Array, then assign elements of second input into new Array
		} else if (newArray == undefined) {
			newArray = firstSplit[i]
			newArray += secondSplit[i]
		}
	}
	return newArray
}

/* Weryfikacja */

function verify(input, goal) {
	if (input === goal) {
		console.log("Gratulacje!")
	} else {
		console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`)
	}
}

verify(zipIt(111, 222), "121212")
verify(zipIt(123, 456), "142536")
verify(zipIt(12, 5555), "152555")
verify(zipIt(5555, 12), "515255")
