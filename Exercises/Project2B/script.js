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
	const { odd: oddFiltered, even: evenFiltered } = filterNumbers(numberArr)
	let oddSum
	let evenSum

	 oddSum = calcArraySum(oddFiltered)
	 evenSum = calcArraySum(mapArrayNums(evenFiltered))

	return { oddSum, evenSum }
}

const decodeCardType = number => {
	const cardLength = stringToNumArr(number).length
	const cardType = +typeCardNumber(number).join("")
	let cardName

	for (const card in Cards) {
		const { length, number } = Cards[card]
		const startsWith = number.map(el => cardType.toString().startsWith(el))
		if (startsWith.includes(true) && length.includes(cardLength)) {
			cardName = card
			break
		}
	}

	return cardName
}

const checkCardNumber = number => {
	const numberArr = stringToNumArr(number)

	const { oddSum, evenSum } = cardNumVals(numberArr)

	const luhnAlghoritm = (oddSum + evenSum) % 10 === 0
	if (luhnAlghoritm) {
		console.log(decodeCardType(number))
		return
	}
	console.log("Nieprawidłowy")
	// return
}

// checkCardNumber(5575060112299324)
// checkCardNumber(5193080150954111)
// checkCardNumber("4716 3886 5385 2323")
// checkCardNumber(348933579298848)
