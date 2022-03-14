const url = document.URL
console.log(url)
const addTo =
	url +
	"?utm_source=Testy&utm_medium=Pierwsz&utm_campaign=Lato&utm_id=MateuszGr%C4%99da"
console.log(addTo)

// const input1 = document.getElementById("num1").value
// const input2 = document.getElementById("num2").value

const calcBMI = (weight, height) => {
	const BMI = weight / height ** 2
    return BMI;
}

console.log(calcBMI(175, 120));