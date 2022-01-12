function validate(itemLength, length) {
	if (itemLength >= length) {
		return itemLength - length
	}
	return itemLength
}

function caesar13(str) {
	if (typeof str !== "string" || !str.length) {
		return "Input is not a string or it is empty"
	}

	const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
	const special = /[\W]/g
	return str.replace(special, '').split('')
		.map(el => {
			if (!Number.isNaN(+el)) {
				return el
			}
			const index = validate(alphabet.indexOf(el) + 13, alphabet.length)
			return el === el.toUpperCase()
				? alphabet[index].toUpperCase()
				: alphabet[index].toLowerCase()
		})
		.join("")
}

console.log(caesar13(12345678))
console.log(caesar13("PRZEPROGRAMOWANI"))
console.log(caesar13("123A$b        cd%^efghij098"))
console.log(caesar13("32prze()^%progra$#^&MOWANI123"))
