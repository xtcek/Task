const subSite1 = document.querySelector(".subsite1")
// Event handler for change query URL params
subSite1.addEventListener("click", function (e) {
	e.preventDefault()
	if (subSite1)
		window.location.href =
			subSite1.href +
			"?przejscie" +
			"?utm_source=Testy&utm_medium=Pierwsz&utm_campaign=Lato&utm_id=MateuszGr%C4%99da".replace(
				"utm_campaign=Lato",
				"utm_campaign=Zima"
			)
})

history.pushState(
	null,
	null,
	"?utm_source=Testy&utm_medium=Pierwsz&utm_campaign=Lato&utm_id=MateuszGr%C4%99da"
)

// subSite2.addEventListener("click", function (e) {
//     e.preventDefault();
// 	window.location.href.replace(window.location.search, "")
// })

// const input1 = document.getElementById("num1").value
// const input2 = document.getElementById("num2").value

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
