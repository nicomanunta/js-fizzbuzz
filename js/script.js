// Utilizzare ciclo for per generare i numeri da 1 a 100
for (let i = 1; i<=100; i++){
    // se multipli sia di 3 che di 5, stampare FizzBuzz
    if(i%3 == 0 && i%5 == 0){
        console.log("FizzBuzz")
    }
    // se multipli di 3, stampare Fizz
    else if(i%3 == 0){
        console.log("Fizz")
    }
    // se multipli di 5, stampare Buzz
    else if(i%5 == 0){
        console.log("Buzz")
    }
    // altrimenti stampare i numeri normali
    else{
        console.log(i)
    }
}

