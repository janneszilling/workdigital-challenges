/**
 * Bitte erstelle eine Funktion, welche bei der Eingabe einer Zahl zwischen 1 und 26 den Buchstaben an der entsprechenden Stelle des Alphabets zurückgibt. Wenn die Zahl nicht in diesem Bereich liegt oder keine gültige Zahl ist, dann gebe „invalid“ zurück.
 */

const getLetter = (num) => {
  if (!/^([1-9]?|1[0-9]|2[0-6])(\.0)?$/.test(num.toString())) {
    return "Ungültige Eingabe";
  }
  return String.fromCharCode(96 + Math.floor(num));
};

console.log(getLetter(1));
console.log(getLetter(26.0));
console.log(getLetter(0));
console.log(getLetter(4.5));
