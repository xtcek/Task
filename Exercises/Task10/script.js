function rulez(...param) {
	//create two Arrays, where firstArr gets parametrs with rest operator, secondArr is empty Array
	const firstArr = [...param]
	const secondArr = []
	//create new Array and use syntax for Array to merge Arrays and then apply empty Array with parameters of func
	const newArray = Array.prototype.concat.apply(secondArr, firstArr)
		//return merged and applied new Array
	return newArray
}

/* Weryfikacja */

function verify(input, goal) {
	if (JSON.stringify(input) === JSON.stringify(goal)) {
		console.log("Gratulacje!")
	} else {
		console.log(
			`Niestety, oczekiwano - ${JSON.stringify(
				goal
			)}, otrzymano - ${JSON.stringify(input)}`
		)
	}
}
verify(rulez([1, 5], [6, 1]), [1, 5, 6, 1])
verify(rulez([1], [2], [3], [4], [5], [6]), [1, 2, 3, 4, 5, 6])
