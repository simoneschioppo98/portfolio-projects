// Array 1
let array1 = ["Il sole", "La luna", "Le stelle", "Le nuvole", "Il vento"];

// Array 2
let array2 = ["splende", "danza", "illumina", "abbraccia", "accarezza"];

// Array 3
let array3 = ["il mare", "la montagna", "il bosco", "il deserto", "la città"];

// Array 4
let array4 = ["con gioia", "con serenità", "con meraviglia", "con gratitudine", "con energia"];

// Array 5
let array5 = ["ogni giorno", "in primavera", "sotto la pioggia", "nell'inverno", "nei sogni"];

// funzione per generare frasi randomiche
function fraseGenerator(){

    function randomArr(arr){
        return Math.floor(Math.random() * arr.length)
    }
 let firstWord = array1[randomArr(array1)];
 let secondVerb = array2[randomArr(array2)];
 let thirdWord = array3[randomArr(array3)];
 let fourthAdjective = array4[randomArr(array4)];
 let fifthWord = array5[randomArr(array5)];

 let fullWord = `${firstWord} ${secondVerb} ${thirdWord} ${fourthAdjective} ${fifthWord}`;


return fullWord;
};

fraseGenerator();

// manipolazione del DOM
let cont = document.getElementById("container");

let heading = document.createElement("h1");

let randomPhrase = fraseGenerator();

heading.textContent = randomPhrase;

cont.appendChild(heading);