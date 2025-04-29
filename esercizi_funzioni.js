/*****************************
 *! 🏆 SNACK 1 - Funzione Somma
 * Crea una funzione che somma due numeri in tre modi:
 * 1. Funzione dichiarativa
 * 2. Funzione anonima assegnata a variabile
 * 3. Arrow function
 *****************************/

//task method1
function sommaDichiarativa(a, b) {
    return a + b
}
//task method 2
const sommaAnonima = function (a, b) {
    return (a + b)
}
//task methiod 3
const sommaArrow = (a, b) => a + b

console.log(
    `sommaDichiarativa ${sommaDichiarativa(3, 1)}`,
    `sommaAnonima ${sommaAnonima(5, 1)}`,
    `sommaArrow ${sommaArrow(3, 4)}`)


/*****************************
 *! 🏆 SNACK 2 - Quadrato
 * Crea una arrow function che calcola 
 * il quadrato di un numero in una sola riga
 *****************************/

//task dichiaro variabile con callback arrow anonima
const quadrato = (numero) => numero * numero
console.log(quadrato(2))


/*****************************
 *! 🏆 SNACK 3 - eseguiOperazione
 * Definisci una funzione che accetta tre parametri:
 * - due numeri
 * - una funzione operatore (callback)
 * La funzione deve eseguire l'operazione sui due numeri
 *****************************/

//task  dichiaro globalmente le funzioni operazione, e poi definisco "eseguiOperazione"
//task  passandogli come argomento le varie fuznioni operazione
const somma = (a, b) => a + b
const moltiplica = (a, b) => a * b
const dividi = (a, b) => a / b
const sottrai = (a, b) => a - b

const eseguiOperazione = (a, b, operation) => operation(a, b)

console.log(
    eseguiOperazione(2, 1, moltiplica),
    eseguiOperazione(8, 2, dividi),
    eseguiOperazione(8, 2, sottrai),
    eseguiOperazione(8, 2, somma)
)

/*****************************
 *! 🏆 SNACK 4 - creaTimer
 * Scrivi una funzione che accetta un tempo (ms) 
 * e restituisce una nuova funzione che avvia 
 * un setTimeout per stampare "Tempo scaduto!"
 *****************************/

const creaTimer = (numero) => {

    const msg1 = 'ciao'
    const msg2 = 'salve'

    return function () {
        setTimeout(() => console.log(numero <= 5000 ? msg2 : msg1), numero)
    }
}

//* dichiaro variabile per cambiare argomento
const timer3S = creaTimer(3000)
const timer5S = creaTimer(5000)
const timer8S = creaTimer(8000)
const timer10S = creaTimer(10000)

timer3S()
timer5S()
timer8S()
timer10S()


/*****************************
 *! 🏆 SNACK 5 - stampaOgniSecondo
 * Definisci una funzione che accetta un messaggio
 * e lo stampa ogni secondo usando setInterval
 ** Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.
 *****************************/

function stampaOgniSecondo(msg) {
    return setInterval(() => console.log(msg), 1000)
}

//task è necessario salvare l'ID del setInterval nella costante per poterlo fermare!
//fix const stampaMessaggio = stampaOgniSecondo("messaggio test ogni secondo")

//fix setTimeout(() => clearInterval(stampaMessaggio), 9000)


/*****************************
 *! 🏆 SNACK 6 - creaContatoreAutomatico
 * Definisci una funzione che accetta un intervallo
 * e restituisce una funzione che avvia un setInterval,
 * incrementando e stampando un contatore
 *****************************/
function creaContatoreAutomatico(tempo) {
    let counter = 0
    return setInterval(() => console.log(counter++), tempo)
}
//fix creaContatoreAutomatico(1000)

/*****************************
 * 🏆 SNACK 7 - eseguiEferma
 * Scrivi una funzione che accetta:
 * - un messaggio
 * - tempo di avvio
 * - tempo di stop
 * Stampa il messaggio a intervalli e ferma dopo il tempo di stop
 *****************************/

function eseguiEferma(msg, start, stop) {
    const inizio = setTimeout(() => console.log(msg), start)
    setTimeout(function () {
        clearInterval(inizio)
        console.log('stop')
    }, stop)
    return
}
eseguiEferma('start', 1000, 5000)


/*****************************
 * 🎯 BONUS SNACK 8 - contoAllaRovescia
 * Scrivi una funzione che accetta un numero n
 * e fa il conto alla rovescia da n a 0,
 * con intervallo di 1 secondo
 *****************************/

function contoAllaRovescia(n) {
    let counter = n
    const contatore = setInterval(() => {
        if (counter >= 0) {
            console.log(counter);
            counter--;
        } else {
            clearInterval(contatore);
            console.log("Fine del conto alla rovescia!");
        }
    }, 1000)
}
contoAllaRovescia(6)


/*****************************
 * 🎯 BONUS SNACK 9 - sequenzaOperazioni
 * Scrivi una funzione che accetta:
 * - array di operazioni (funzioni)
 * - tempo di intervallo
 * Esegue ogni operazione in sequenza con il ritardo specificato
 *****************************/

const operazioniMatematiche = [
    (a, b) => a + b,
    (c, d) => c * d,
    (e, f) => e / f,
    (g, h) => g - h
]

function sequenzaOperazioni(array, tempo) {
    for (let i = 0; i < array.length; i++) {
        let delay = i * tempo
        setTimeout(() => array[i](), delay)
    }
}

sequenzaOperazioni([
    () => console.log("Operazione 1"),
    () => console.log("Operazione 2"),
    () => console.log("Operazione 3"),
    () => console.log("Operazione 4")
], 2000);

/*****************************
 * 🎯 BONUS SNACK 10 - creaThrottler
 * Scrivi una funzione che accetta:
 * - una funzione
 * - un tempo limite
 * Restituisce una nuova funzione che può essere eseguita
 * al massimo una volta ogni n millisecondi
 *****************************/


function creaThrottler(callback, tempo) {
    let lastExecutionTime = 0; // Variabile per memorizzare l'ultimo timestamp

    // Questa è la funzione che verrà restituita
    return function throttledFunction() {
        const now = Date.now(); // Ottieni il timestamp corrente

        // Verifica se è trascorso abbastanza tempo dall'ultima esecuzione
        if (now - lastExecutionTime >= tempo) {
            // È trascorso abbastanza tempo, quindi esegui la callback
            callback();

            // Aggiorna l'ultimo timestamp di esecuzione
            lastExecutionTime = now;
        } else {
            // Non è trascorso abbastanza tempo, quindi ignora la chiamata
            console.log("Chiamata ignorata (troppo presto)");
        }
    };
}

const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000);

throttledLog(); // ✅ "Eseguito!"
throttledLog(); // ❌ Ignorato (chiamato troppo presto)
setTimeout(throttledLog, 2500); // ✅ "Eseguito!" (dopo 2.5 secondi)
setTimeout(throttledLog, 5000); // ✅ "Eseguito!" (dopo 5 secondi)



