const emojiMappings = {
	stop: "🚫",
	gwiazda: "⭐️",
	samochód: "🏎",
	buduję: "🧱",
	budzik: "⏰",
}

function useEmoji(input) {
	//create var to get basic Array words includes input params, create var to get last position of words Array length
	let words = input
	let lastItem = words[words.length - 1]
	let temp
	//compare var to input and make input toLowerCase, make replace of "dot" char globally and split it, after split our words Array
	temp = input.toLowerCase().replace(/[.]/gi, "").split(" ")
	words = words.split(" ")
	//create loop for every element of temp
	for (let i of temp) {
		//create inside-built loop for every element in declared object
		for (let j in emojiMappings) {
			//check if elements of both arrays are compared
			if (j == i) {
				//if statement is matching, then in words Array make indexOf for every element of temp Array and compare it to every element of declared object
				words[temp.indexOf(i)] = emojiMappings[i]
				
			}

		}
	}
	//join elements of Array together
	words = words.join(" ")
	//make return statement as Template String for our words Array and check if lastItem matches with dot, if true then add dot on the last position, if false then skip
	return `${words}${lastItem === "." ? "." : ""}`
}

function verify(input, goal) {
	if (input === goal) {
		console.log("Gratulacje!")
	} else {
		console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`)
	}
}

verify(
	useEmoji("Takiemu zachowaniu mówię stop i to mocny estop!"),
	"Takiemu zachowaniu mówię 🚫 i to mocny estop!"
)
verify(useEmoji("Jadę po nowy samochód :D"), "Jadę po nowy 🏎 :D")
verify(useEmoji("Jadę po nowy samochódy :D"), "Jadę po nowy samochódy :D")
verify(
	useEmoji("Właśnie buduję swoje skille w JS"),
	"Właśnie 🧱 swoje skille w JS"
)
verify(
	useEmoji("Właśnie nadbuduję swoje skille w JS"),
	"Właśnie nadbuduję swoje skille w JS"
)
verify(useEmoji("Buduję samochód"), "🧱 🏎")
verify(useEmoji("BuDuję SaMocHód."), "🧱 🏎.")
