function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let salyga = rand(1, 5);

let k = 'krokodilas';
let z = 'zebras';
let d = 'dramblys';
let r = 'raganosis';
let b = 'babuinas';

// salyga = 1;
let kazkasPriskirtaIf;
//
//
let kazkasPriskirta = (salyga == 1 || salyga == 4 || salyga == 5) ?
    ((salyga == 1) ? k : ((salyga == 4) ? r : b)) : ((salyga == 2) ? z : d);

if (salyga == 1) {
    kazkasPriskirtaIf = k;
} else if (salyga == 2) {
    kazkasPriskirtaIf = z;
} else if (salyga == 4) {
    kazkasPriskirtaIf = r;
} else if (salyga == 5) {
    kazkasPriskirtaIf = b;
} else {
    kazkasPriskirtaIf = d;
}






console.log(kazkasPriskirta, kazkasPriskirtaIf);

let a1 = rand(0, 2);
let a2 = rand(0, 2);
let a3 = rand(0, 2);
let a4 = rand(0, 2);

console.log(a1, a2, a3, a4);

let _0 = 0;
let _1 = 0;
let _2 = 0;

(a1 == 2) ? _2++ : ((a1 == 1) ? _1++ : _0++);
(a2 == 2) ? _2++ : ((a2 == 1) ? _1++ : _0++);
(a3 == 2) ? _2++ : ((a3 == 1) ? _1++ : _0++);
(a4 == 2) ? _2++ : ((a4 == 1) ? _1++ : _0++);

console.log(_0, _1, _2);

//1.
let egzaminoRezultatas = rand(1, 10);
// Išvesti rezultatą ir sprendimą ar egzaminas išlaikytas. Mažiausias išlaikymo balas yra 4

console.log(egzaminoRezultatas);


(egzaminoRezultatas >= 4) ? console.log('Valio išlaikytas'): console.log('Na kitą kartą');

let rez = (egzaminoRezultatas >= 4) ? 'Valio išlaikytas' : 'Na kitą kartą';
console.log(rez);

// console.log((egzaminoRezultatas >= 4) ? 'Valio išlaikytas' : 'Na kitą kartą');

// console.log(console.log(egzaminoRezultatas >= 4));

console.log('------------------------------');

console.log(1 === true);