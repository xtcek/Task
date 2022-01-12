function validate(itemLength, length) {
	if(itemLength >= length){
		return itemLength - length
	}
	return itemLength
}

function caesar13(str) {
	if(typeof str !== 'string' || !str.length){
		return 'Input is not a string or it is empty'
	}
	
	const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
	let special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g
	let strReplace = str.replace(special, "")
	let strSplit = str.split("")
	return strSplit.map(el =>{
		if(!Number.isNaN(+el)){
			return el
		}
		const index = validate(alphabet.indexOf(el) + 13, alphabet.length)
		return el === el.toUpperCase() ? alphabet[index].toUpperCase() : alphabet[index].toLowerCase()
	}).join("")
	
}

console.log(caesar13(12345678))
console.log(caesar13('abddefg'))
