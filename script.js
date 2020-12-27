function pageLoad(){

	// put everything inside pageLoad.
	// write functions by using variables but without values.
	// clean code: choose function and variable names in a fucntions that anyone can guess what that function will do without knowing JavaScript language.

	//HTML: struktúra megtervezése, miket tegyek közös befoglaló divbe és miket külön, mikor hogy érdemes a pozícionálás vagy a style miatt (közös classnevek figyelembevételével)

	//CSS: többféle selector használata, pl.  element>element  div > p Selects all <p> elements where the parent is a <div> element,
	//:first-child --> p:first-child Selects every <p> element that is the first child of its parent https://www.w3schools.com/cssref/css_selectors.asp

	//JS: különbőző megoldások, találatok ugyanarra feladatra, miért azt kell hazsnálni és mikor más megoldást.

	let rootE = document.getElementById("root");

	let notes = [];

	notes.push({
		tag: "div",
		class: ' class = "html"',
		content: `
		<p>Sturktúra megfeleő kialakítása</p>
		`,
		image:  `
		<img src="./img/html.png" alt="htmlImage">
		`,
	});

	notes.push({
		tag: "div",
		class: ' class = "css"',
		content: `
		<p>Child elemekre való hivatkozás gyakorlása</p>
		`,
		image:  `
		<img src="./img/css.png" alt="cssImage">
		`,
	});

	notes.push({
		tag: "div",
		class: ' class = "js"',
		content: `
		<p>Logikai feladatok megoldásának leírása javascriptben</p>
		`,
		image:  `
		<img src="./img/js.png" alt="jsImage">
		`,
	});


	//console.log(notes);

	for (note of notes) {
		rootE.insertAdjacentHTML("beforeend", `
		<${note.tag}${note.class}>${note.content}${note.image}
	`);
	}



//TODO: emailben hétfőn elküldeni Richardnak
// 	highligth codes Richárd Atom14:47
// http://highlightjs.org
// https://highlightjs.org/download/
// <link rel="stylesheet"
//       href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.4.1/styles/default.min.css">
// <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.4.1/highlight.min.js"></script>
// https://highlightjs.org/usage/

// Richárd Atom14:48
// document.addEventListener('DOMContentLoaded', (event) => {
//   document.querySelectorAll('pre code').forEach((block) => {
//     hljs.highlightBlock(block);
//   });
// });
// document.addEventListener('DOMContentLoaded', (event) => {
//   document.querySelectorAll('code').forEach((block) => {
//     hljs.highlightBlock(block);
//   });
// });
// hljs.highlightBlock(block); mindenre ezt kell a végén meghívni
// + legyen style and font, padding amd margin és színek.
// Gábor Nagy14:51
//ellenkező irányba forogjanak?
}



window.addEventListener("load", pageLoad);