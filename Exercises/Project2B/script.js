const Cards = {
	Mastercard: {
		length: [16],
		number: [51, 52, 53, 54, 55],
	},
	Visa: {
		length: [13, 16],
		number: [4],
	},
	"American Express": {
		length: [15],
		number: [34, 37],
	},
}

const numToString = number => {
	return number.toString()
}

const stringToNumArr = number => {
	return numToString(number)
		.split("")
		.map(num => +num)
}

const filterNumbers = numberArr => {
	const filteredNumbers = {
		odd: [],
		even: [],
	}

	numberArr.filter((num, idx) => {
		return filteredNumbers[`${idx % 2 !== 0 ? "odd" : "even"}`].push(num)
	})
	return filteredNumbers
}
// console.log(filterNumbers(stringToNumArr(123456778)));

const calcArraySum = numberArr => {
	return numberArr.reduce((prev, next) => (prev += next), 0)
}

const mapArrayNums = numberArr => {
	return numberArr
		.map(el => (el * 2 >= 10 ? [1, (el * 2) % 10] : el * 2))
		.flat()
}

// console.log(mapArrayNums(stringToNumArr(1234567887654)))

const typeCardNumber = num => {
	return stringToNumArr(num).slice(0, 2)
}
// console.log(typeCardNumber(5575060112239323));

const cardNumVals = numberArr => {
	const { odd: oddFiltered, even: evenFiltered} = filterNumbers(numberArr)

	
}

const decodeCardType = number => {
	const cardLength = stringToNumArr(number).length
	const cardType = typeCardNumber(number).join("")
	let cardName

	for (const card in Cards) {
		const { length, number } = Cards[card]
		if (number.includes(cardType) && length.includes(cardLength)) {
			cardName = card
		}
	}

	console.log(cardLength)
	console.log(cardType)

	return cardName
}

decodeCardType(4)

function checkCardNumber(number) {
	const numberArr = stringToNumArr(number)

	// return
}
