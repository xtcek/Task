let ss = SpreadsheetApp.getActiveSpreadsheet()
let sheetTask2 = ss.getSheetByName("Zadanie 2")
let sheetTask3 = ss.getSheetByName("Zadanie 3")

function myFunction() {
	let lastRow = sheetTask3.getLastRow()

	if (sheetTask3.getRange(lastRow, 1) !== "")
	sheetTask3.getRange(lastRow, 1).setValue("TEST123")
}
