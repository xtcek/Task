// function factory() {
//    const quote = {
//      msg: 'Cool!'
//    }
//    return {quote: quote.msg}
// }

function factory() {
	//return Object with quote property
	return {
		quote: "Cool!",
	}
}

/* Weryfikacja */

verify(factory().quote, "Cool!")

function verify(input, goal) {
	if (input === goal) {
		console.log("Gratulacje!")
	} else {
		console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`)
	}
}
