function caesar13(str) {
	const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
	const special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g
	let shift = 13
	let strSplit = str.split("")
	let result = ""

	if (shift > 13) {
	} else if (typeof str != "string") {
		return "str have to be string"
	} else if (typeof shift != "number") {
		return "shift have to be a number"
	}

	for (let i = 0; i < strSplit.length; i++) {
		let index = alphabet.indexOf(strSplit[i])
	}
	// return ''
}

console.log(caesar13("PRZEPROGRAMOWANI"))
