function validate(itemLength, length) {
	if (itemLength >= length) {
		return itemLength - length
	}
	return itemLength
}

function caesar13(str) {
	if (typeof str !== "string" || !str.length) {
		return "Input is not a string or it is empty"
	}

	const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
	const special = /[\W]/g
	
	return str.replace(special, "").split("")
		.map(el => {
			if (!Number.isNaN(+el)) {
				return el
			}
			const index = validate(alphabet.indexOf(el) + 13, alphabet.length)
			return el === el.toUpperCase()
				? alphabet[index].toUpperCase()
				: alphabet[index].toLowerCase()
		})
		.join("")
}
// console.log(caesar13('PRZEPROGRAMOWANI'));
// console.log(caesar13('PrZePrOgRaMoWaNi'));
// console.log(caesar13('PRZE123$%^pro&*()-=gramo3456WANi789'));
// console.log(caesar13('     Repro     gramat în $%^&              viitorul        ap   ro pi a      t'));
// console.log(caesar13('PROGRAкы   ж г ы м д ы    ш      mowaно́вoйMücke nko321$$##@@!!'));

function verify(input, goal){
	if(input === goal){
		console.log('Jest ok!');
	} else {
		console.log(`Nie jest ok... dostałeś ${input} zamiast ${goal}`);
	}
}

verify(caesar13('PRZEPROGRAMOWANI'), 'CEMRCEBTENZBJNAV')
verify(caesar13('PrZePrOgRaMoWaNi'), 'CeMrCeBtEnZbJnAv')
verify(caesar13('P R Z E 1 2 3 p r o g r a m o 3 4 5 6 W A N i 7 8 9'), 'CEMR123cebtenzb3456JNAv789')
verify(caesar13('     Repro     gramat în $%^&              viitorul        ap   ro pi a      t'), 'Ercebtenzngaivvgbehyncebcvng')
verify(caesar13('PROGRAкы   ж г ы м д ы    ш      mowaно́вйMücke nko321$$##@@!!'), 'CEBTENzbjnZpxraxb321')
