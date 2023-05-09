
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/


let firstZahl = prompt("Bitte erste Zahl eingeben");
    firstZahl = parseFloat(firstZahl); // Umwandlung vom String in Float Wert

let secondZahl = prompt("Bitte zweite Zahl eingeben"); 
    secondZahl = parseFloat(secondZahl); // Umwandlung vom String in Float Wert
/*
Konvertierung in Float ist wichtig damit es als Zahl erkannt
und somit als Rechenvariable gesehen wird
*/

// If Abfrage damit unterschiedliche Zahlen gewählt werden
if (firstZahl == secondZahl) {
        let secondZahl = prompt("Nimm ne andere Zahl");
            secondZahl = parseFloat(secondZahl);
}


let summe = firstZahl + secondZahl;

console.log("Die Summe ist: " + summe);

//Zusatzabfrage ob die Summe korrekt ist

let richtig = prompt("Welche Summe haben sie errechenet?")
    richtig = parseFloat(richtig);


if (summe == richtig) {
    console.log("Korrekt")
} else {
        console.log("Nö leider falsch")
} 
