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


// 1 - Scrivere una funzione che prenda in ingresso 3 parametri:
// - Una stringa che rappresenti un nome (es. Matteo)
// - Un numero che rappresenti un'eta'  (es. 36)
// - Una stringa che rappresenti un linguaggio di programmazione (es. JavaScript)
// Questa funzione dovra' restituire la stringa Mi chiamo Matteo, ho 36 anni ed il mio linguaggio di programmazione preferito e' JavaScript

// function dettagli(name, eta, linguaggio){ console.log(` ciao mi chiamo ${name} ho ${eta} anni e il mio linguaggio di programmazione preferito è ${linguaggio}` );}

// dettagli('Elison' , 31 , 'JS')



// 2 - Scrivere una funzione che prenda in input due parametri e restituisca true se sono identici, false altrimenti. 
// Esempi: Input: a = 2, b = 3 Output: false 
//                 Input: a = 2, b = "2" Output: false 
//                 Input: a = 2, b = 2 Output: true


// function number (a , b){

//     if(a ==b) {
//         return true ;
//         } else{
//             return false
//         }
// }
// console.log( number (5 , 7));


// Esercizi array: 
// 1 - Dato l' array  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10, 10] utilizzare il giusto metodo degli array per rimuovere il primo 10 e sostituirlo con un 9


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 10]
 
// arr.splice(8, 1, 9);

// console.log(arr);



// 2 - Dato un array vuoto names = []   utilizzare il metodo giusto per aggiungere all'interno i nomi degli studenti della vostra aula studio

// let arr = []
// arr.unshift('Michael, Elison, Simone')

// console.log(arr);






// 1 - Scrivere una funzione che prenda un array di 10 numeri interi ordinati in modo casuale in ingresso e li riordini in modo decrescente. 
// Esempio: Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4] Output: [8, 7, 6, 5, 5, 3, 2, 1, -2, -4] 
// Variante: Provare ad ordinali in modo crescente.

// function decrescente(arr){
//     return number.sort((a,b) => b-a);
// }

// function crescente(arr){
//     return number.sort((a,b) => a-b);
// }

// let number =[3, 7, -2, 5, 8, 1, 2, 5, 6, -4];

// console.log(decrescente(number));







// 2 - Scrivere due funzioni che prendano in input un array di numeri, una dovra’ restituire il numero maggiore, l'altra dovra’ restituire il minore.
// Esempio: Input: a = [1, -10, 4]
// Output: minore = -10, maggiore = 4



// function minore(arr) {
//     return arr.shift(arr.sort((a,b) => b-a));
// };
// function maggiore(arr) {
//     return arr.pop(arr.sort((a,b) => b-a));
// };
// let number = [9 , 5 , 98 , -3 , 77];

// console.log(`Numero minore : ${minore(number)}`);
// console.log(`Numero Maggiore : ${maggiore(number)} `);





























// 1 -  Dichiarare una variabile contenente l’età di un utente. Fare in modo che venga stampata in console la frase: Hai x anni e te ne mancano ancora y per arrivare a 100. (servirà una seconda variabile che indichi quanti anni mancano per arrivare a 100) 

// let age = 31
// console.log(`hai ${age} e ti ne mancano ${100-age} anni per arrivare a 100`);


// // 2 -  Scrivere un programma che dati:
// a) Un numero totale di gatti (44)
// b) Il  numero dei gatti presenti in ogni fila (6)
// Restituisca in output:
// - Il  numero di file risultanti
// - indicare il numero di gatti mancanti per completare una nuova fila 


// let cat = 44
// let fila = 6

// console.log(`ci sono ${cat} gatti e ${fila} file , in ogni fila ci sono ${Math.floor (cat/fila)} gatti e ne rimangono fuori ${cat % fila} `);




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




// function minore(arr){
//     return arr.shift(arr.sort((a,b) => b-a));
    
// }
// function maggiore(arr){
//     return arr.pop(arr.sort((a,b) => b-a));
    
// }
// let number= [10 , -2 , 31 , 22 , 15 , -6 , 7] ;

// console.log(`temperatura minore ${minore(number)}`);
// console.log(`temperatura maggiore ${maggiore(number)}`);


  




// // 4 - Utilizzando i seguenti operandi (false, 23, NaN, ‘Ciao’, null) scegliere i giusti operatori di confronto e logici per fare in modo che il risultato sia true. Utilizzare tutti gli operandi una sola volta ciascuno. 

// console.log(23 !== 'ciao'|| false && NaN !== null);




// 1 - Scrivere un programma che simuli una sfida ai dadi tra due giocatori. Dichiarare una variabile che rappresenti un numero N, per ogni giocatore saranno effettuati N tiri di dato ed alla fine dovra' essere decretato il vincitore (oppure un pareggio)


// let palyer1 = a;
// let player2 = b;
// let n= 7
// let punteggio = 0

// if(a > b){
//     punteggio= punteggio + Math.floor(Math.random()(6-1+1)+1)
    
// }










// 1 - Scrivere una funzione che prenda in ingresso 3 parametri:
// - Una stringa che rappresenti un nome (es. Matteo)
// - Un numero che rappresenti un'eta'  (es. 36)
// - Una stringa che rappresenti un linguaggio di programmazione (es. JavaScript)
// Questa funzione dovra' restituire la stringa Mi chiamo Matteo, ho 36 anni ed il mio linguaggio di programmazione preferito e' JavaScript

// function dettagli(name, eta, linguaggio){ console.log(` ciao mi chiamo ${name} ho ${eta} anni e il mio linguaggio di programmazione preferito è ${linguaggio}` );}

// dettagli('Elison' , 31 , 'JS')



// 2 - Scrivere una funzione che prenda in input due parametri e restituisca true se sono identici, false altrimenti. 
// Esempi: Input: a = 2, b = 3 Output: false 
//                 Input: a = 2, b = "2" Output: false 
//                 Input: a = 2, b = 2 Output: true


// function number (a , b){

//     if(a ==b) {
//         return true ;
//         } else{
//             return false
//         }
// }
// console.log( number (5 , 7));


// Esercizi array: 
// 1 - Dato l' array  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10, 10] utilizzare il giusto metodo degli array per rimuovere il primo 10 e sostituirlo con un 9


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 10]
 
// arr.splice(8, 1, 9);

// console.log(arr);



// 2 - Dato un array vuoto names = []   utilizzare il metodo giusto per aggiungere all'interno i nomi degli studenti della vostra aula studio

// let arr = []
// arr.unshift('Michael, Elison, Simone')

// console.log(arr);






// 1 - Scrivere una funzione che prenda un array di 10 numeri interi ordinati in modo casuale in ingresso e li riordini in modo decrescente. 
// Esempio: Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4] Output: [8, 7, 6, 5, 5, 3, 2, 1, -2, -4] 
// Variante: Provare ad ordinali in modo crescente.

// function decrescente(arr){
//     return number.sort((a,b) => b-a);
// }

// function crescente(arr){
//     return number.sort((a,b) => a-b);
// }

// let number =[3, 7, -2, 5, 8, 1, 2, 5, 6, -4];

// console.log(decrescente(number));







// 2 - Scrivere due funzioni che prendano in input un array di numeri, una dovra’ restituire il numero maggiore, l'altra dovra’ restituire il minore.
// Esempio: Input: a = [1, -10, 4]
// Output: minore = -10, maggiore = 4



// function minore(arr) {
//     return arr.shift(arr.sort((a,b) => b-a));
// };
// function maggiore(arr) {
//     return arr.pop(arr.sort((a,b) => b-a));
// };
// let number = [9 , 5 , 98 , -3 , 77];

// console.log(`Numero minore : ${minore(number)}`);
// console.log(`Numero Maggiore : ${maggiore(number)} `);

























// Esercizi Funzioni e Metodi degli Array:
// - Scrivere una funzione che prenda in input un numero intero 
// (massimo 9999) conti da quante cifre è formato.

// Esempi:

//     Input : 9
//     Output :  1 cifra

//     Input : 99
//     Output :  2 cifre 

// Super indizio: anche le stringhe hanno la proprieta' .length



// function cifra(number){

//     if(number < 0 && number > 9999){
//         return 'Numero non valido';
//     }

//     let str = number.toString().length;
//     return str;

// }

// console.log(cifra(305));






// -  Scrivere una funzione che prenda in input una stringa e 
// restituisca TRUE se è palindroma, FALSE se non lo è.
//   Nel controllo scarta gli spazi e i segni di punteggiatura. 

//   Esempio:
//     Input: i topi non avevano nipoti
//     Output: TRUE


//   Consigli:
//   Potete eliminare spazi e segni di punteggiatura usando :


//      str.replace(/\W/g, "").



// function stringaPalindroma(string){

//     string = string.replace(/\W/g,"");
//    let stringareverse = string.split('').reverse().join('');
//    return string   === stringareverse ;
// }


// console.log(stringaPalindroma('i topi non avevano nipoti'));









// - Scrivere una funzione che prenda in input un numero intero N e mi restituisca un array con all'interno N numeri casuali


// function numbers(array){
    
//     let arr= []
//     for(let i = 0 ; i < number ; i++){

//     arr.push(Math.round(Math.random() * (100 - 1 + 1) + 1 )) ;
// }
// }

// console.log(numbers(10));






// - Scrivere una funzione che dati:
//         - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
//         - il tipo di operazione aritmetica da effettuare (stringa), una delle seguenti:
//            addizione
//            sottrazione
//           moltiplicazione
//           divisione
//          Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio.

//         Esempio:
//         Input: a= [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b=[9, 3, 1, 4, 7, 6, 5, 10, 1, 5] operazione = "addizione"
//         Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]


// let arr1 = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4]
// let arr2 = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5]

// function arrayoperation(arr1, arr2 , operation){
//     number.forEach((number, i) => {
//         if (i % 2 == 0);}
// )

// }
// console.log(arrayoperation(arr1+arr2));





// - Scrivere una funzione che dato un array di numeri, calcoli la media dei valori e restituisca in output un nuovo array con tutti i valori minori della media.

//   Esempio:
//     Input: a = [3, 5, 10, 2, 8]
//     Output: media = 5.6, valori minori della media= [3, 5, 2]

//   Variante (Abbastanza Croccante):
//   Stampare anche quanti sono i valori minori della media e quanti quelli maggiori della media.
// ﻿


// function valoriMinoriMedia(array) {
//     let media = array.reduce((acc, curr) => acc +curr, 0) / array.length;
//     let valoriMinori = array.filter((valore) => valore < media);
//     let valoriMaggiori = array.filter((valore) => valore >= media);
//     console.log(Media: ${media});
//     console.log(valori minori della media: ${valoriMinori});
//     console.log(valori maggiori o uguali della media: ${valoriMaggiori});
//     return valoriMinori
// }

// let a =[3, 5, 10, 2, 8]
// let valoriMinori = valoriMinoriMedia(a);
// console.log(valori minori della media: ${valoriMinori});



// // Esercizi Funzioni e Metodi degli Array:
// // - Scrivere una funzione che prenda in input un numero intero (massimo 9999) conti da quante cifre è formato.

// // Esempi:

// //     Input : 9
// //     Output :  1 cifra

// //     Input : 99
// //     Output :  2 cifre

// // Super indizio: anche le stringhe hanno la proprieta' .length

// function digitCounter(i){
//     let nDigits = i.length;
//     return nDigits;

//  }

//  let numero_da_contare = prompt("Inserisci un numero ");
//  console.log (digitCounter(numero_da_contare))

// // Esercizio 2
// // -  Scrivere una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
// //   Nel controllo scarta gli spazi e i segni di punteggiatura.

// //   Esempio:
// //     Input: i topi non avevano nipoti
// //     Output: TRUE

// //   Consigli:
// //   Potete eliminare spazi e segni di punteggiatura usando :

// //      str.replace(/\W/g, "").

// let frase = prompt("Inserisci un palindromo ");

// frase = frase.replace(/\W/g, "");
// function palindrome(str){

//     let splittedArray = str.split("");
//     let reversedArray = splittedArray.reverse();
//     let joinedArray = reversedArray.join("");
//     if (str == joinedArray){
//         return "Palindromo";
//     }else{
//         return "Non palindromo" ;
//     }
// }
// console.log(palindrome(frase))

// - Scrivere una funzione che prenda in input un numero intero N e mi restituisca un array con all'interno N numeri casuali

// function creaArray(n){
//     let randomNumbers = Array(n).fill().map(() => Math.floor(Math.random()* (100-1+1
//     )+1))
//     return randomNumbers;
// }
// let lunghezzaArray = prompt("Quanto deve essere lungo il tuo array? ");
// lunghezzaArray = lunghezzaArray*1;
// console.log(creaArray(lunghezzaArray))

// - Scrivere una funzione che dati:
// //         - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
// //         - il tipo di operazione aritmetica da effettuare (stringa), una delle seguenti:
// //           addizione
// //           sottrazione
// //           moltiplicazione
// //           divisione
// //          Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio.

// //         Esempio:
// //         Input: a= [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b=[9, 3, 1, 4, 7, 6, 5, 10, 1, 5] operazione = "addizione"
// //         Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

// let operazione = prompt("Scegli tra addizione, sottrazione, moltiplicazione, divisione! ");

// function calcoli(array1, array2){
//     if(operazione == "addizione"){
//         let array3 = array1.map((number, i) => number + array2[i]);
//         return array3;
//     }else if(operazione == "sottrazione"){
//         let array3 = array1.map((number, i) => number - array2[i]);
//         return array3;
//     }else if(operazione == "moltiplicazione"){
//         let array3 = array1.map((number, i) => number * array2[i]);
//         return array3;
//     }else{
//         let array3 = array1.map((number, i) => number / array2[i]);
//         return array3;
//     }
// }

// let a1 = [1, 1, 1];
// let a2 = [5, 6, 7];
// console.log("Il tuo primo array è " + a1)
// console.log("Il tuo secondo array è " + a2)
// console.log (calcoli(a1,a2))

// - Scrivere una funzione che dato un array di numeri, calcoli la media dei valori e restituisca in output un nuovo array con tutti i valori minori della media.

//   Esempio:
//     Input: a = [3, 5, 10, 2, 8]
//     Output: media = 5.6, valori minori della media= [3, 5, 2]

//   Variante (Abbastanza Croccante):
//   Stampare anche quanti sono i valori minori della media e quanti quelli maggiori della media.

// function media(array) {
//     let somma = array.reduce((acc, n) => acc + n);
//     let media = somma / array.length;
//     let arrayMin = array.filter((n, i) => n < media);
//     let arrayMax = array.filter((n, i) => n > media);
//     console.log("I valori minori della media sono " + arrayMin);
//     console.log("Ci sono " + arrayMin.length + " valori sotto la media");
//     console.log("Ci sono " + arrayMax.length + " valori sopra la media");
//     return media;
//   }
//   // let max = Math.max(...array);
//   // let min = Math.min(...array);
//   let numeri = [10, 100, 50, 85];
//   console.log("La media dei numeri è di " + media(numeri));






// - Scrivere una funzione che prenda in ingresso una stringa e la restituisca tutta in maiuscolo

// function stringa_upp(trasformation){
    
    
//     let str = 'ciao mi chiamo Matteo';
//     let maiuscolo = str.toUpperCase(str)
//     console.log(maiuscolo);


//     oppure 
// //    str.toLowerCase() == str.toLowerCase()
  

// // }
// //  console.log(stringa_upp);










// - Scrivere una funzione che prenda in ingresso un qualunque numero intero N e stampi in console tutti i numeri da 1 ad N



// function conta(number){
    
  
//     for(let i = 1 ; i <= 10 ; i++){
        
       
//         console.log(i);
        
//     }
// }

// conta(10) ;












// - Scrivere una funzione che prenda in ingresso due array e mi restituisca un nuovo array che sia la concatenazione dei primi due. 
//    Es. arr1 = [1,2,3]  arr2 = [4,5,6]     output = [1,2,3,4,5,6]

// let arr1 = [1, 2, 3] 
// let arr2 = [4, 5, 6]

// function unione(arr1 , arr2){
    
  
//    let  arr3 = arr1.concat(arr2);
//      return arr3;
// }

// console.log(unione(arr1, arr2));















// - Scrivere una funzione che prenda in ingresso un array di nomi e mi restituisca l'array con i nomi in ordine alfabetico capovolto.
//    Es. arr = ['Matteo', 'Anakin', 'Luke', 'ObiWan']     output = ['ObiWan', 'Matteo', 'Luke', 'Anakin']




// let arr = ['Matteo', 'Anakin', 'Luke', 'ObiWan']

// function elenco(name){
    

//  let arr2 =  arr.sort().reverse()
//     return arr2 ;
    
    
// }

// console.log(elenco(arr));














// Esercizi intermedi:
// - Scrivere una funzione che prenda in ingresso un array di numeri e mi restituisca un nuovo array con i numeri triplicati

// let array = [5, 7, 10]

// function insieme(numeri){

// let triplo = array.map((number) => number * 3
    
// )
// return triplo ;

// }

// console.log(insieme(array));








// - Scrivere una funzione che prenda in ingresso un array di numeri e mi restituisca un nuovo array che contenga soltanto i numeri multipli di 10
//    Es. arr = [1, 10, 56, 130, 45]    output = [10, 130]



// let arr = [1, 10, 56, 130, 45] ;

// function insieme(numbers){

//     let multipli = arr.filter((number) => number % 10 == 0)
//     return multipli ;
// }

// console.log(insieme(arr));














// - Scrivere una funzione che prenda in ingresso una stringa e me la restituisca capovolta



// let str = 'Ciao' 

// function capovolta(string){

//     let str2 = str.split('').reverse().join('');
//     return str2;
// }

// console.log(capovolta(str));













// - Scrivere una funzione che prenda in ingresso un qualsiasi numero di parametri e mi stampi in console tutti i parametri passati. (Indizio: spread operator)




// function insieme(numbers){


//     }

// console.log(...[10 , -11 , 250]);












// - Scrivere una funzione che prenda in ingresso o un numero o una stringa. Se il dato passato e' un numero deve trasformarlo in stringa, se il dato passato e' una stringa deve restituirla capovolta
//    Es. input = 5   output = '5'              Es2. input = 'Ciao'   output = 'oaiC


// function trasformazione(data){

//     if(typeof data == 'number'){
//         return data.toString();
//     } else if(typeof data == 'string'){
//         return data.split('').reverse().join('');
//     }else { return 'Tipo di dato non valido'
//      }
//     }
    
    
//     console.log(trasformazione('Ciao'));

















// Esercizi che il fumo deve uscire dalle orecchie:
// - Scrivere un oggetto che rappresenti un garage. Questo garage dovra' avere una proprieta' che rappresenti una lista di auto ed alcuni metodi. Un metodo deve permettermi si stampare in console la lista di auto presenti in garage. Un metodo deve permettermi di aggiungere una nuova auto. Un metodo deve permettermi di rimuovere una delle auto nella lista.

 
// let garage = {

//     'marche' : ['Audi' , 'BMW' , 'Ferrari'] ,
//     'scegli' : function(macchina_scelta){

//         if(garage.marche.includes(macchina_scelta) ){
//             console.log(`scelgo ${macchina_scelta}`);

//         } else {
//             console.log(`${macchina_scelta} questa macchina non è in garage`);
//         }
//     },

//     mostra_auto: function(){(automobile) => console.log(automobile));
//     } ,

//     aggiungi_macchina : function(marca){
//         garage.marche.push(marca);
//     } ,

//     rimuovi_macchina : function(marca_rimossa){
//         let index = garage.marca.indexOf(marca_rimossa) ;
//         if(index <=0){

//             console.log(`${marca_rimossa} è stata rimossa`);
//             garage.marche.splice(index, 1) ;
//         } else{
//             console.log(`${marca_rimossa} non è in garage`);
//         }
       
//     }


// }

// garage.scegli('Lamborghini');
// // garage.marche('mostra marche')  ;
// garage.aggiungi_macchina('Lamborghini')
// // garage.rimuovi_macchina('Ferrari')





// Esercizi di riscaldamento:
// - Scrivere una funzione che prenda in ingresso un qualsiasi numero di dati e mi restituisca la stringa 'Mi hai passato N dati' dove N rappresenta il numero di elementi che sono stati passati
// Es. 1   numeroDati(  'Millenium Falcon', 66, false);      
//  output = Mi hai passato 3 dati

// function numeri(...dati){

//   console.log(`mi hai passato ${dati.length} dati`)

// }


// numeri(1, 5, 'ciao')




// - Scrivere una funzione che prenda in ingresso una stringa e me la restituisca tutta in maiuscolo
// Es. input = 'may the force be with you'       output = 'MAY THE FORCE BE WITH YOU'




// function upper(str){

// console.log(str.toUpperCase());
// }

// upper('ciao mi chiamo elison')



// - Scrivere una funzione che prenda in ingresso due array e mi restituisca un nuovo array che sia l'unione dei due inviati ma capovolto
// Es. arr1 = [1,2,3]   arr2 = [4,5,6]    output = [6,5,4,3,2,1]

// let arr1= [1,2,3];
// let arr2 = [4,5,6];

// function insieme(arr1, arr2){

//     let arr3= arr1.concat(arr2).reverse()

//     return arr3;

// }

// console.log(insieme(arr1, arr2));





// - Scrivere una funzione che prenda in ingresso un array contenente qualsiasi dato e mi restituisca un nuovo array contenente soltanto numeri
// Es. array = [1, 'due', true, 4]     output = [1, 4]

// let number = [1,2,3,'ciao']

// let array = [8, 10 , 'elison', 'ciao']

// function insieme(arr){

//   return arr.filter((el)=> typeof el === 'number')

  
// }

// console.log(insieme(array));



// - Scrivere una funzione che prenda in ingresso un numero e mi stampi in console il conto alla rovescia dal numero scelto fino a 1
// Es. input = 5    output = 5             4             3           2             1                         (indizio: ricordate l'operatore di decremento)


// function insieme(number){

//     for(let i = number ; i > 0 ; i--){

//         console.log(i);
//     }

// }

// insieme(5)











// - Scrivere una funzione che prenda in ingresso un qualsiasi quantitativo di numeri e mi restituisca un array con tutti i numeri dispari maggiori di 10
// Es. moreThanTen(1, 5, 6, 8, 10, 11, 13, 16, 22)     output = [11, 13]


// let arr = [1, 5, 6, 8, 10, 11, 13, 16, 22]

// function insieme(numbers){

// let dispari = numbers.filter((n)=> n % 2 != 0 && n > 10)
// return dispari

// }

// console.log(insieme(arr));





// - Scrivere una funzione che prenda in ingresso un nome, un cognome ed una professione e mi restituisca un oggetto che abbia queste proprieta'
// Es. createPerson('Qui-Gon' , 'Jin', 'Maestro Jedi')    output = {name : 'Qui-Gon' , surname: 'Jin', job: 'Maestro Jedi'}



// let team = {

//     person : [  


//      ],



//     addPerson : function(nome, cognome, lavoro){

//     return dati = {name : nome , surname : cognome , job : lavoro};

// }

// }

// console.log(team.addPerson('Elison' , 'Di Biase', 'Developer'));





// - Scrivere una funzione che prenda in ingresso un array e mi restituisca un nuovo array che contenga solo le stringhe messe in ordine alfabetico

// let saluto = [5 , 'ciao' , 6 , 'buongiorno' , 10];


// function strings(arr){

// return arr.filter((el)=> typeof el === 'string').sort();


// }

// console.log(strings(saluto));




// Esercizi che il cervello se ne va in sciopero:
// - Scrivere un oggetto che mi permetta di simulare una sala giochi. Questo oggetto dovra' avere una proprieta' che rappresenti una lista di giocatori ed ogni giocatore sara' a sua volta un oggetto con una proprieta' name ed una proprieta' score: []. Scrivere dei metodi che vi permettano di simulare una sfida ai dadi e se ne decreti il vincitore


let sala = {

    players : [] ,




    set_winner : function(){

        this.set_scores(6);
        // this.set_punteggio();
      
       this.players.sort((a , b) => b.set_punteggio - a.set_punteggio);

       let winner = this.players[0];

       if( winner.set_punteggio > this.players[1].set_punteggio){
        console.log(`Il vincitore è ${winner.name} ${winner.surname} e ha totalizzato ${winner.set_punteggio}`);

       } else{
        console.log('Questa partita non ha vincitori perche i primi sue giocatori hanno pareggiato');

       }

    },



    set_punteggio : function(){

        this.players.forEach((giocatore) => {
        giocatore.punteggio = giocatore.scores.reduce( (acc, n) => acc + n ) ;
      }) ;

    },

    set_scores : function(nTiri){

        this.players.forEach((giocatore) => {

        for(let i = 0 ; i >= nTiri ; i++){

        giocatore.scores.push( Math.floor(Math.random() * (6 - 1 + 1) + 1)) ;
        
        }
     } ) 




    },


    addPlayer : function(nome,cognome){

        this.players.push({name : nome , surname : cognome , scores : [] }) ;
    },
    
    
    
    
    
    
    
}


sala.addPlayer('Elison' , 'Di biase' , 'Web developer');
sala.addPlayer('Alin' , 'Draghia' , 'Web developer');
sala.addPlayer('Michael' , 'Cotugno' , 'Web developer');

sala.set_winner();
console.log(sala);


























// let salaGiochi = {

// players : [



//   ] ,

    
//     addPlayers : function(nome, cognome){

//         this.players.push({name : nome , surname : cognome , scores : [] }) ;


//     } ,


//     setScores : function(nTiri){
//         this.players.forEach((giocatore)=> {

//             for(let i = 1 ; i <= nTiri ; i++){
//                 giocatore.scores.push(Math.floor(Math.random() * (6 - 1 + 1) + 1)) ;
//             }

//         })

//     } , 



//         SetFinalScore : function(){
//             this.players.forEach((giocatore)=> {

//                 giocatore.finalScore = giocatore.scores.reduce((acc , n)=> acc + n) ;

//             }) ;


//         } ,



//         setWinner : function(){

//             this.setScores(6) ;
//             this.SetFinalScore() ,

//             this.players.sort((a , b)=> b.finalScore - a.finalScore ) ;
//             let winner = this.players[0] ;

//             if(winner.finalScore > this.players[1].finalScore){
//                 console.log(   `Il vincitore della partita e' ${winner.name} ${winner.surname} che ha totalizzato un punteggio finale di: ${winner.finalScore}`   );
    
//             } else{
//                 console.log(`Questa partita non ha vincitori perche' i primi due giocatori hanno pareggiato!`);
//             }

//         } ,



// };

// salaGiochi.addPlayers('Elison', 'Di Biase' ) ;
// salaGiochi.addPlayers('Alin', 'Draghia' ) ;
// salaGiochi.addPlayers('Michael', 'Cotugno' ) ;

// salaGiochi.setWinner();
// console.log(salaGiochi);















// - Replicare l'oggetto smartphone visto a lezione con una variante. Modificare il metodo di aggiunta contatti in modo tale che non aggiunga un solo contatto ma N contatti contemporaneamente con un solo metodo.
// Es. smartphone.aggiungi_contatti('Matteo', 'Yoda', 'Windu') 