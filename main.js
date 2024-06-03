let userName;
userName = prompt('Inserisci gentilmente il tuo nome');

let userLastName;
userLastName = prompt('Inserisce gentilmente il tuo cognome');

let userFavoriteColor;
userFavoriteColor = prompt('Inserisci gentilmente il tuo colore preferito');

let result;
result = ` ${userName} ${userLastName} ${userFavoriteColor}`;

document.getElementById("my_id").innerHTML = result;

const resultAndNumber = `${result}13`;

document.getElementById("my_id").innerHTML = resultAndNumber;