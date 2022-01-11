function caesar13(str) {
	const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
	const special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g
	let shift = 13
	let strSplit = str.split("")
	let result = ""

	for (let i = 0; i < strSplit.length; i++) {
		let index = alphabet.indexOf(strSplit[i])
	}
	// return ''
}

console.log(caesar13("PRZEPROGRAMOWANI"))
