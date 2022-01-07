function validatePassword(password) {
  //create variable of numbers
	let numbers = /[0123456789]/
  //make if statements about password length, if not return false
	if (password.length >= 3 && password.length <= 10) {
    //check if parametr type is string
		if (typeof password === "string") {
      //check if password param pattern with numbers, if not return false
			if (numbers.test(password)) {
        //check if password param includes special chars, if not return false
				if (password.includes("!") || password.includes("@") || password.includes("#")) {
          //if statements are successful then return true 
					return true
				} else {
					return false
				}
			} else {
				return false
			}
		}
	} else {
		return false
	}
}

/* Weryfikacja */

function verify(input, goal) {
	if (input === goal) {
		console.log("Gratulacje!")
	} else {
		console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`)
	}
}

verify(validatePassword(""), false)
verify(validatePassword("lol"), false)
verify(validatePassword("ToDziala1#"), true)
