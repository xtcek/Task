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
		return el
	}).join("")

	// const index;

	// if (shift > 13) {
	// } else if (typeof str != "string") {
	// 	return "str have to be string"
	// } else if (typeof shift != "number") {
	// 	return "shift have to be a number"
	// }

	// for (let i = 0; i < strSplit.length; i++) {
	// 	let index = alphabet.indexOf(strSplit[i])
	// }
	// return ''
}

console.log(caesar13(12345678))
console.log(caesar13('abddefg'))
