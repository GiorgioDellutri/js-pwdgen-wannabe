const nome = prompt ('Inserisci il tuo nome');
const cognome = prompt ('Inserisci il tuo cognome')
const colore = prompt ('Inserisci il tuo colore preferito')
const numero = "22"

const password = nome + cognome + " " + numero

document.getElementById('password').innerHTML = 'La tua password è ' + password; 

console.log