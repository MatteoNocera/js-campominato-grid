/* 

Consegna

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
Confermate lettura come al solito e buon divertimento :baby-yoda:

*/

// L'utente clicca su un bottone che genererà una griglia
//markup = <div class="cell d-flex justify-content-center align-items-center text-white border border-white"></div>

// individuo il button sulla DOM

const buttonElement = document.querySelector('button');

const grigliaElement = document.getElementById('griglia');

buttonElement.addEventListener('click', function() {

    const click = true;

    if (condition) {
        
    } else {
        
    }
    console.log('hai cliccato start');
    
    // ciclo
    for (let i = 0; i < 100; i++) {
        // genero una griglia
        const squareNumber = i;
        //console.log(squareNumber);
        const squareMarkup = `<div id="${i + 1}" class="cell d-flex justify-content-center align-items-center text-white border border-white">${squareNumber + 1}</div>`;

        //console.log(squareMarkup);
        grigliaElement.insertAdjacentHTML('beforeend', squareMarkup);

        // Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
        const cellElement = document.getElementById(i + 1);

        cellElement.addEventListener('click', function(){
            console.log('hai cliccato la casella numero ' + (squareNumber + 1));
            cellElement.classList.toggle('my_bg_palegreen')
        })
        
    }
    

});



