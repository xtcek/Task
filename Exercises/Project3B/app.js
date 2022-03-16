
const subSite1 = document.querySelector(".subsite1")

// Event handler for change query URL params
subSite1.addEventListener("click", function (e) {
	e.preventDefault()

	window.location.href =
		subSite1.href +
		"?przejscie" +
		"?utm_source=Testy&utm_medium=Pierwsz&utm_campaign=Lato&utm_id=MateuszGr%C4%99da".replace(
			"utm_campaign=Lato",
			"utm_campaign=Zima"
		)
})

// Add query params to the URL
history.pushState(
	null,
	null,
	"?utm_source=Testy&utm_medium=Pierwsz&utm_campaign=Lato&utm_id=MateuszGr%C4%99da"
)

// const input1 = document.getElementById("num1").value
// const input2 = document.getElementById("num2").value

const calcBMI = (weight, height) => {
	const BMI = weight / height ** 2
	return BMI
}

console.log(calcBMI(175, 120))
