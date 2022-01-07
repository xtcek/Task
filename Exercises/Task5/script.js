function isPangram(sentence) {
	//create var for alphabet letters and then var which gonna split letters var
	const letters = "aąbcćdeęfghijklłmnńoóprsśtuwyzźż"
	const lettersSplit = letters.split("")
	//make sentence input toLowerCase and replace special chars globally with "no space"
	sentence = sentence.toLowerCase()
	sentence = sentence.replace(/[!,.? ]/g, "")
	//create var which gonna split our input param
	let sentenceSplit = sentence.split("")
	//create loop to check every element in input length
	for (let i = 0; i < sentence.length; i++) {
		//var el compare to sentenceSplit var, which is gonna log every single element of input
		const el = sentenceSplit[i]
		//var index compare to our splitted letters and look for every element of sentenceSplit
		const index = lettersSplit.indexOf(el)
		//create if statement which is gonna return false while our index contains -1
		if (index === -1) {
			return false
			//else if index isn't -1 value then cut elements from sentenceSplit and insert into lettersSplit
		} else if (index !== -1) {
			lettersSplit.splice(index, 1)
		}
	}
	return !lettersSplit.length
}

/* Weryfikacja */

function verify(input, goal) {
	if (input === goal) {
		console.log("Gratulacje!")
	} else {
		console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`)
	}
}

verify(isPangram("test"), false)
verify(isPangram("Dość gróźb fuzją, klnę, pych i małżeństw!"), true)
verify(isPangram("Dość gróźb fuzją, klnę, pych i małże!"), false)
