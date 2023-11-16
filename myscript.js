/*prova 1
alert('La mia sfera di cristallo dice che cerchi una password...');
//dichiarazione variabile
let Nome;
//assegnazione
Nome = 'Fabio';*///

console.log('Hello world');
document.getElementById('Name');
//debug

//console.log(document.getElementById('name'));
//selezione html tag
/**tools:
 * -variabile
 * -backticks
 * -prompt
 */
// chiedo il nome e lo salvo in una variabile,
const Name = prompt('Come ti chiami?') //variabile username creata -DICHIARATA
console.log(Name);//loggo in console la var creata-INIZIALIZZATA

//chedo anche il cognome e salvo sempre in variabile,
const Lastname = prompt('...e il tuo cognome?'); // -DICHIARATA
console.log(Lastname);//-INIZIALIZZATA

//infine, chiedo il colore prefe,
const Color = prompt('abbiamo quasi finito! Dimmi il tuo colore preferito'); //-DICHIARATA
console.log(Color);//-INIZIALIZZATA

//dai i risultati della password

//variabile
const password = Name + Lastname + Color;
console.log(password);
//messaggio
const result = document.getElementById('message')
result.innerHTML= `ecco la tua nuova password: ${password}`