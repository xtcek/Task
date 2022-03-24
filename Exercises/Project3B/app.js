const changeURL = () => {
	let path = window.location.pathname
	console.log(path)
	if (path === "/Project1/index.html") {
		window.history.pushState(
			null,
			null,
			"?utm_source=Testy&utm_medium=Pierwsz&utm_campaign=Lato&utm_id=MateuszGr%C4%99da"
		)
}

const calcBMI = (weight, height) => {
	let bmi = (weight / Math.pow(height / 100, 2)).toFixed(2)
	console.log(bmi)
	if (bmi < 18.5) {
		console.log("Niedowaga")
	} else if (bmi >= 18.5 && bmi < 25) {
		console.log("Wartość prawidłowa")
	} else {
		console.log("Nadwaga")
	}
	return bmi
}

calcBMI(50, 173)
calcBMI(70, 190)
calcBMI(100, 180)
