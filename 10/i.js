let name1 = 'Braškė';
let hello = 'Hello';

// Funkcijos deklaravimas
function sayHello(t2) { // t2 yra parametras
    // let hello = 'Hello';
    console.log(`${t2}, ${name1}!!!`);
}






// Funkcijos iškvietimas

sayHello('labas'); // labas yra argumentas

sayHello(hello); // hello yra argumentas

sayHello();

sayHello();

sayHello();


// console.log(hello);



function zoo(animal = 'neaišku kas') {
    console.log(`Zoo Sode gyvena ${animal}`);
}


zoo('varlė');

zoo('liūtas');

zoo('papūga');

zoo();


function skaicius(sk) {
    console.log(`Dabar skaičius yra: ${sk}`);
}

for (let i = 1; i <= 20; i++) {
    skaicius(i);
}


function sumuokle(a, b) {
    let suma = a + b;
    return suma;
}


let kiek = sumuokle(5, 7);

console.log(kiek);


function zoologas(animal) {

    if (animal == 'papūga' || animal == 'varna' || animal == 'zylė') {
        return `${animal} yra paukštis`;
    }
    if (animal == 'vilkas' || animal == 'zuikis' || animal == 'lapė') {
        return `${animal} yra žinduolis`;
    }
    return `Nežinau tokio ${animal}`;

}

console.log(zoologas('vilkas'));
console.log(zoologas('papūga'));
console.log(zoologas('žirafa'));


function arNelyginis(skaicius) { //grazina true jeigu nelyginis ir grazina false jeigu lyginis
    return Boolean(skaicius % 2); // gražinam 1 (paverstą į TRUE) jeigu nelyginis arba gražina 0 (paverstą į FALSE) jeigu lyginis
}


for (let i = 1; i <= 20; i++) {
    if (arNelyginis(i)) {
        console.log(`Ciklas nr. ${i} yra nelyginis`);
    }
}

// 1.

function kiekARaidziu(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'a') {
            count++;
        }
    }
    return count;
}

function kiekRaidziu(string, raide) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() === raide) {
            count++;
        }
    }
    return count;
}

function reverseWord(word) {
    let out = '';
    for (let i = 0; i < word.length; i++) {
        out = word[i] + out; //s //us //lus //alus
    }
    return out;
}

console.log(reverseWord('tarakonas')); // alus

console.log('Yra p raidžių:', kiekRaidziu('Papūga', 'p'));
console.log('Yra k raidžių:', kiekRaidziu('Vilkas', 'k'));
console.log('Yra u raidžių:', kiekRaidziu('Zuikis', 'u'));