
let elenco = document.querySelector("ul")

// Utilizzare ciclo for per generare i numeri da 1 a 100
for (let i = 1; i<=100; i++){
    // se multipli sia di 3 che di 5, stampare FizzBuzz
    if(i%3 == 0 && i%5 == 0){
        // dare una variabile al tag "li" con il testo FizzBuzz da inserire in html (non obbligatorio ma più comprensibile)
        let list = `<li id=numero${i}> FizzBuzz </li>`
        // aggiungere li a ul utlizzando le variabili create 
        elenco.innerHTML += list
       
    }
    // se multipli di 3, stampare Fizz
    else if(i%3 == 0){
        // dare una variabile al tag "li" con il testo Fizz da inserire in html (non obbligatorio ma più comprensibile)
        let list = `<li id=numero${i}> Fizz </li>`
        // aggiungere li a ul utlizzando le variabili create 
        elenco.innerHTML += list
        
    }
    // se multipli di 5, stampare Buzz
    else if(i%5 == 0){
        // dare una variabile al tag "li" con il testo Buzz da inserire in html (non obbligatorio ma più comprensibile)
        let list = `<li id=numero${i}> Buzz </li>`
        // aggiungere li a ul utlizzando le variabili create 
        elenco.innerHTML += list
        
    }
    // altrimenti stampare i numeri normali
    else{
        // dare una variabile al tag "li" con il numero da inserire in html (non obbligatorio ma più comprensibile)
        let list = `<li id=numero${i}> ${i} </li>`
        // aggiungere li a ul utlizzando le variabili create 
        elenco.innerHTML += list
    
    }
}

