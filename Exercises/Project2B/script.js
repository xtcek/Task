const Cards = {
	Mastercard: {
		length: [16],
		number: [51, 52, 53, 54, 55]
	},
	Visa: {
		length: [13, 16],
		number: [4],
	},
	'American Express': {
		length: [15],
		number: [34, 37],
	},
}

const numToString = number => number.toString()

const stringToNumArr = number => {
	return numToString(number).split("")
}

const filterNumbers = numberArr => {
	const filteredNumbers = {
		odd: [],
		even: [],
	}

	numberArr.filter((num, idx) => {

	})
}







function checkCardNumber(number) {
	
}
