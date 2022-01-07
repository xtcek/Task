function reverseMe(str) {
	//parametr str change into Array, then reverse elements of Array and join them into String
	return str.split("").reverse().join("")
}

function verify(str, goal) {
	if (typeof str === "string") {
		console.log("Gratulacje!")
	} else {
		console.log(`Niestety, otrzymano - ${str}`)
	}
}

/* Weryfikacja */

verify(reverseMe("a"), "a")
verify(reverseMe("abc"), "cba")
verify(reverseMe("Przeprogramowani"), "inawomargorpezrP")
verify(reverseMe("Brawo!"), "!owarB")
