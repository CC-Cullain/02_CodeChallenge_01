
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/


let firstZahl = prompt("Bitte erste Zahl eingeben");
firstZahl =  parseInt(firstZahl);

let secondZahl = prompt("Bitte zweite Zahl eingeben");
secondZahl = parseInt(secondZahl);

let summe = firstZahl + secondZahl;

console.log("Die Summe ist: " + summe);