//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


const numbers = 5;
const numbersToGuess = [];
const num = document.querySelector('.numbers');
const timer = document.querySelector('.timer');
const myTimerInterval = setInterval(myCountdown, 1000);
const numeriDigitati = [];
const numeriIndovinati = [];
const numeriSbagliati = [];
const punteggio = document.querySelector('.score');
let countdown = 5;

//numero random
function numeroRandomRange(min, max){
    const range = (max - min) + 1;
    const numeroRandom = Math.floor(Math.random()*range + min);
    return numeroRandom; 
}

//numer random unico
function numeroUnico (min, max, used){
    let numeroUnico = numeroRandomRange(min, max);
    while(used.includes(numeroUnico)){
        numeroUnico = numeroRandomRange(min, max);
    }
    return numeroUnico;
}

//5 numeri casuali da indovinare
for(let i=0; i < numbers; i++){
    let number = numeroUnico(1, 100, numbersToGuess)
    numbersToGuess.push(number)
}
console.log(numbersToGuess);

let showNumber = showNumberToGuess();

function showNumberToGuess(){
    for(let i=0; i < numbers; i++){
        num.innerHTML = num.innerHTML + ' ' + numbersToGuess[i];
    
    }
}

function myCountdown (){
    countdown--;
    timer.innerHTML = 'Timer: ' + countdown;
    if(countdown <= 0){
        num.innerHTML= '';
        clearInterval(myTimerInterval);
    }
}

function inputNumber(){
    for(let i=0; i < numbers; i++){
        let number = parseInt(prompt('Digita un numero alla volta di quelli che hai memorizzato'))
        numeriDigitati.push(number)
    }
    for(let i=0; i < numbersToGuess.length; i++){
        if(numbersToGuess.includes(numeriDigitati[i])){
            numeriIndovinati.push(numeriDigitati[i])
        }else{
            numeriSbagliati.push(numeriDigitati[i])
        }
        
    }
    console.log('Hai indovinato' + numeriIndovinati);
    console.log('Non hai indovinato' + numeriSbagliati);

    punteggio.innerHTML = `Hai indovinato ${numeriIndovinati.length} numeri. I numeri indovinati sono ${numeriIndovinati}.` 
}

setTimeout(inputNumber, 6000);










