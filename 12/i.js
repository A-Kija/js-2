console.log('Start');

// betKas yra funkcijos parametras

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomSkirtumas(betKas) { // funkcijos deklaracija
    let r = rand(50, 300);
    console.log(r - betKas);
}


console.log('End');

let skaicius1 = 55; // bus funkcijos argumentas
let skaicius2 = 88; // bus funkcijos argumentas
let skaicius3 = 114; // bus funkcijos argumentas

randomSkirtumas(skaicius1); // funkcijos iškvietimas
randomSkirtumas(skaicius2); // funkcijos iškvietimas
randomSkirtumas(254); // funkcijos iškvietimas

console.log('--------------------------------');

// let r = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
// console.log(r - skaicius1);

// r = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
// console.log(r - skaicius2);

// r = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
// console.log(r - 254);


function suma(a, b) {
    let suma = a + b;
    return suma;
}


let suma1 = 5 + 8;

let suma2 = suma(5, 8);

console.log(suma1, suma2);


let str = 'Žvirblis';


function raide(string, number) {
    return string[number - 1];
}

let rai1 = raide(str, 6);

let rai2 = str[5];

console.log(rai1, rai2);