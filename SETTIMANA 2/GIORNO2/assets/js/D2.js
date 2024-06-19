/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let number1 = 12;
let number2 = 23;
if (number1 > number2) {
  console.log("number1 è maggiore di number2")
} else if (number2 > number1) { console.log("number 2 è maggionre di number 1") }
else {
  console.log("sono uguali");
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let numb = 8;
if (numb !== 5) {
  console.log("not equal");
} else { console.log("equal"); }

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let numb1 = 45;
myRest = numb1 % 5;
if (myRest === 0) {
  console.log("divisibile per 5");
} else { console.log("non è divisibile per 5"); }

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const numbInt1 = 8;
const numbInt2 = 19;
if (numbInt1 === 8 || numbInt2 === 8 || numbInt1 - numbInt2 === 8 || numbInt2 - numbInt1 === 8 || numbInt1 + numbInt2 === 8 || numbInt2 + numbInt1 === 8) {
  console.log("equal");
} else {
  console.log("not equal");
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 52;
let delivery = 10;
let checkout;
if (totalShoppingCart > 50) {
  checkout = totalShoppingCart;
} else {
  checkout = totalShoppingCart + delivery;
}
console.log(checkout);


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let prodotto = 52;
let totalShoppingCart2 = 42;
if (totalShoppingCart2 > 50) {
  console.log("spedizione gratuita");
} else {
  console.log("10 euro di spedizione");
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const numeri = [1, 9, 7];
numeri.sort();
console.log(numeri);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let value = "dieci";
console.log(typeof ("dieci"));

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let myNumb = 30;

if (myNumb % 2 === 0) {
  console.log("è pari")
} else { console.log("è dispari"); }

/*ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto";
console.log(me);


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.length = me.skills.length - 1;
console.log(me);


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const arr = [];
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
arr[9] = 100;
console.log(arr);