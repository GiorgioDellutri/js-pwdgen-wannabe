let nome = prompt ('Inserisci il tuo nome');
let cognome = prompt ('Inserisci il tuo cognome')
let colore = prompt ('Inserisci il tuo colore preferito')
let numero = "22"

const password = nome + cognome + colore + " " + numero

document.getElementById('password').innerHTML = 'La tua password è ' + password; 

console.log(nome)
console.log(cognome)
console.log(colore)
console.log(numero)
console.log(password)