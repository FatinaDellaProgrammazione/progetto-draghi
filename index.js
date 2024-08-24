alert('EEEEEENCHAAAANTIIIIIIX WOOOOHOWOOOOOOHO ENCHANTIIIIX!')

//-passo 1- trovare il modo di prendere l'oggetto html dai bottoni
const pulsantiCarosello = document.querySelectorAll(".pulsante");
const immagini = document.querySelectorAll(".immagine");
const informazioni = document.querySelectorAll(".informazione")
//.log è un metodo. document è l'oggetto che a sua volta avrà un metodo//

//-passo 2- trovare un modo per identificare il click dell'utente sul bottone//
 pulsantiCarosello.forEach ((pulsante, indice) => {
    pulsante.addEventListener("click", () => {
    //-passo 3- deselezionare il botone precedentemente cliccato//
    disattivarePulsanteSelezionato();
    //il codice inizialmente scritto era quello sotto, poi selezioni le due righe=>tasto destro=> refactor=>seconda opz. e dai il nome//

    //-passo 4-segnare il bottone cliccato come selezionato//
    pulsante.classList.add("selezionato");

    //-passo 5- nascondere l'immagine precedentemente selezionata//
    nascondereImmagineAttiva();
    
    //-passo 6- far comparire l'immagine corrispondente al bottone cliccato//
    immagini[indice].classList.add("attiva");

    //-passo 7- nascondere informazione del drago precedentemente selezionato//
    nascondereInformazioneAttiva();

    //-passo 8- mostrare l'informazione del drago corrispondente//
    informazioni[indice].classList.add("attiva")

    }); 
});


function nascondereInformazioneAttiva() {
    const informazioneAttiva = document.querySelector(".informazione.attiva");
    informazioneAttiva.classList.remove("attiva");
}

function nascondereImmagineAttiva() {
    const immagineAttiva = document.querySelector(".attiva");
    immagineAttiva.classList.remove("attiva");
}

function disattivarePulsanteSelezionato() {
    const pulsanteSelezionato = document.querySelector(".selezionato");
    //queryselector e non qsAll perché abbiamo un solo elemento selezionato//
    pulsanteSelezionato.classList.remove("selezionato");
}



