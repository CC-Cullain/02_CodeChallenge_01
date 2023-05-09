
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/


let firstZahl = prompt("Bitte erste Zahl eingeben");
firstZahl =  parseInt(firstZahl); // Umwandlung vom String in Integer Wert

let secondZahl = prompt("Bitte zweite Zahl eingeben"); 
secondZahl = parseInt(secondZahl); // Umwandlung vom String in Integer Wert

/*
Konvertierung in Integer ist wichtig damit es als Zahl erkannt
 und somit als Rechenvariable gesehen wird
 */

let summe = firstZahl + secondZahl;

console.log("Die Summe ist: " + summe);