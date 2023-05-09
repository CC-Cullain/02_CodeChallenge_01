
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

// If Abfrage damit unterschiedliche Zahlen gewählt werden
if (firstZahl == secondZahl) {
   let secondZahl = prompt("Nimm ne andere Zahl")
   secondZahl = parseInt(secondZahl);
}

/*
Konvertierung in Integer ist wichtig damit es als Zahl erkannt
 und somit als Rechenvariable gesehen wird
 */

let summe = firstZahl + secondZahl;

console.log("Die Summe ist: " + summe);

//Zusatzabfrage ob die Summe korrekt ist

let richtig = prompt("Welche Summe haben sie errechenet?")
richtig = parseInt(richtig);


if (summe == richtig) {
    console.log("Korrekt")
} else {
    console.log("Nö leider falsch")
} 
