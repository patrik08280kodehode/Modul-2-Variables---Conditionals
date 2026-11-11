// OPPGAVE 2

/* I forrige undervisning lærte vi hvordan man lager variabler som kan holde ulike
typer verdier. Lag noen variabler med følgende datatyper:
- String (tekst)
- Number (tall)
- Boolean (sann/usann)
- Array (liste)

Du kan velge hva innholdet i variablene skal være. Prøv å bruke både let og 
const når du definerer variablene.
****************************************************************************** */

// Skriv koden for oppgave 2 her
let letstringexample = "This is the example for let string";
console.log(letstringexample);

const conststringexample = "This is the example for const string";
console.log(conststringexample);

let letnumberexample = 10;
console.log(letnumberexample);

const constnumberexample = 20;
console.log(constnumberexample);

let letbooleanexample = true;
console.log(letbooleanexample);

const constbooleanexample = false;
console.log(constbooleanexample);

let letarrayexample = [1, 2, 3];
console.log(letarrayexample);

const constarrayexample = ["a", "b", "c"];
console.log(constarrayexample);

/******************************************************************************
OPPGAVE 3

Prøv ut noen av operatorene vi så på i forrige forelesning:
- Matematiske operatorer: +, -, /, *
- Forkortede operatorer: ++, --, +=, -=

Skriv noen eksempler der du tester disse operatorene.
******************************************************************************/

// Skriv koden for oppgave 3 her
let number1 = 10;
let number2 = 7;

console.log(number1 + number2);

console.log(number1 - number2);

console.log(number1 / number2);

console.log(number1 * number2);

let examplecounter = 0;
examplecounter++;
console.log(examplecounter);
examplecounter--;
console.log(examplecounter);
examplecounter += 6;
console.log(examplecounter);
examplecounter -= 4;
console.log(examplecounter);

/******************************************************************************
OPPGAVE 4

Skriv en IF/ELSE-betingelse som sjekker følgende:
1. At userName ikke er tom ("").
2. At userAge er 18 eller eldre.
3. At userIsBlocked er false.

(TIPS: Bruk && (logisk OG) for å sjekke alle tre betingelsene i én IF-setning.)

- Hvis alle disse betingelsene er oppfylt, skal du sette variabelen
userIsLoggedIn til true og goToPage til "/home". Deretter skriver du ut en 
velkomstmelding med console.log.

- Hvis noen av betingelsene IKKE er oppfylt, skal du skrive ut en feilmelding
med console.log.

Prøv å endre verdiene på variablene for å sikre at IF/ELSE-setningen din 
håndterer alle tilfeller korrekt.
******************************************************************************/

let userName = "Tine";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

// Skriv koden for oppgave 4 her
if (userIsLoggedIn === true) {
  console.log("Something went wrong");
}
if (userIsBlocked === true) {
  console.log("Something went wrong");
}
if (userName != "" && userAge >= 18 && userIsBlocked === false) {
  userIsLoggedIn = true;
  goToPage = "/home";
  console.log("Welcome " + userName + "! You are now logged in.");
} else {
  console.log("Unable to log in.");
}

/******************************************************************************
OPPGAVE 5

Lag en variabel kalt userTitle og sett innholdet til å være:
- "Mr." hvis userMale er true, eller
- "Mrs." hvis userMale er false.

Bruk en ternary conditional for dette:

const variabel = betingelse ? "hvis sann" : "hvis usann";

Prøv å endre userMale til både true og false og bruk console.log for å sjekke
at betingelsen din fungerer som den skal.
******************************************************************************/

const userMale = false;

// Skriv koden for oppgave 5 her
const userGender = userMale ? "Mr." : "Mrs.";
console.log(userGender);
