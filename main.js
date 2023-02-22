// Esercizi della mattina :

// console.log(Math.max(3 , 244 , 71 , 59 , 100)) ;

// console.log((3% 2) == 0) ;

// console.log((244% 2) == 0) ;

// console.log((71% 2) == 0) ;

// console.log((59% 2) == 0) ;

// console.log((100% 2) == 0) ;

// // (0, NaN, 'ciao', false)

// console.log(0 !== NaN && 'ciao' !== false) ;


// Esercizi pomeridiani

// 1 -  Dichiarare una variabile contenente l’età di un utente. Fare in modo che venga stampata in console la frase: Hai x anni e te ne mancano ancora y per arrivare a 100. (servirà una seconda variabile che indichi quanti anni mancano per arrivare a 100) 

// let age = prompt('Quanti anni hai?');
// // let age2= 56;

// console.log(`Hai ${age}. Te ne mancano ${100 - age} per arrivare a 100 `);



// // 2 -  Scrivere un programma che dati:
// a) Un numero totale di gatti (44)
// b) Il  numero dei gatti presenti in ogni fila (6)
// Restituisca in output:
// - Il  numero di file risultanti
// - indicare il numero di gatti mancanti per completare una nuova fila 


// let cat = 44;
// let file = 6;
// console.log(`Ci sono ${cat} gatti e ${file} file . In ogni fila ci sono ${Math.floor (cat / file) } gatti per fila , con un resto di ${cat % file} . `);



// 3 - Scrivere un programma che dati sette valori relativi alle temperature della settimana
// stabilisca la giornata più calda e quella più fredda.
// Esempio:
// Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
// “La temperatura piu’ calda e’ 31 quella piu’ fredda -6” 




// let a = 10 ;
// let b = -2 ;
// let c = 31 ;
// let d = 22 ;
// let e = 15 ;
// let f = -6 ;
// let g = 7 ;

// console.log(`La temperatura più alta è ${Math.max(a , b , c, d , e , f, g)  } , mentre la più bassa è ${Math.min(a , b,c,d,e,f,g)} `);




// // 4 - Utilizzando i seguenti operandi (false, 23, NaN, ‘Ciao’, null) scegliere i giusti operatori di confronto e logici per fare in modo che il risultato sia true. Utilizzare tutti gli operandi una sola volta ciascuno. 

// console.log(23 !== 'ciao'|| false && NaN !== null);


