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
const Name = prompt('Come ti chiami?') //variabile username creata -DICHIARATA
console.log(Name);//loggo in console la var creata-INIZIALIZZATA

const Lastname = prompt('...e il tuo cognome?'); // -DICHIARATA
console.log(Lastname);//-INIZIALIZZATA

const Color = prompt('abbiamo quasi finito! Dimmi il tuo colore preferito'); //-DICHIARATA
console.log(Color);//-INIZIALIZZATA

const password = Name + Lastname + Color;
console.log(password);

const result = document.getElementById('message')
result.innerHTML= `ecco la tua nuova password: ${password}`