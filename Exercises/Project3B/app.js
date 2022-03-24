const changeURL = () => {
	let path = window.location.pathname
	console.log(path)
	if (path === "/Exercises/Project3B/index.html") {
		window.history.pushState(
			null,
			null,
			"?utm_source=Testy&utm_medium=Pierwsz&utm_campaign=Lato&utm_id=MateuszGr%C4%99da"
		)
	} else if (path === "/Exercises/Project3B/ws1.html") {
		window.history.pushState(
			null,
			null,
			"#przejscie?utm_source=Testy&utm_medium=Pierwsz&utm_campaign=Lato&utm_id=MateuszGr%C4%99da".replace(
				"utm_campaign=Lato",
				"utm_campaign=Zima"
			)
		)
	} else if (path === "/Exercises/Project3B/ws2.html") {
		href = window.location.href
	}
}

changeURL()

function calcBMI(weight, height) {
	let bmi = (weight / Math.pow(height / 100, 2)).toFixed(2)
	if (bmi <= 18.5) {
		console.log("Niedowaga")
	} else if (bmi <= 25 && bmi > 18.5) {
		console.log("Wartość prawidłowa")
	} else {
		console.log("Nadwaga")
	}

	return bmi
}

calcBMI(50, 173)
calcBMI(70, 190)
calcBMI(100, 180)
