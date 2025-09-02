//your JS code here. If required.
const level = document.getElementById("level");
function findLevel() {
	let counter = 0;
	let currentElement = level;
	while (currentElement!==null) {
		currentElement = currentElement.parentNode;
		counter++;
	}
	console.log("The level of the element is:",counter);
}