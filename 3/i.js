function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = rand(2, 10);
let b = rand(2, 10);
let c = rand(2, 10);

c = 3;
c = a = b = 7;

// Surasti ir i console.log išvesti dviejų mažesnių kintamųjų sumą

console.log(a, b, c);


//Ar a yra didžiausias
if (a >= b) {
    if (a >= c) {
        console.log('b + c', b + c);
    }
}
//Ar b yra didžiausias
if (b > a) {
    if (b >= c) {
        console.log('a + c', a + c);
    }
}
//Ar c yra didžiausias
if (c > a) {
    if (c > b) {
        console.log('a + b', a + b);
    }
}


if (a >= b && a >= c) { // ar a
    console.log('b + c', b + c);
} else if (b >= c) { // ar b
    console.log('a + c', a + c);
} else {
    console.log('a + b', a + b);
}


let d = rand(2, 10);
let e = rand(2, 10);


console.log('d->', d, 'e->', e);


if (d > e) {
    console.log('d yra didesnis');
} else if (d == e) {
    console.log('d ir e yra lygūs');
} else {
    console.log('e yra didesnis');
}

/*

operatorius AND
1 && 1 = 1
0 && 1 = 0
1 && 0 = 0
0 && 0 = 0

operatorius OR
1 || 1 = 1
0 || 1 = 1
1 || 0 = 1
0 || 0 = 0


1 && 0 && 1 = 0
1 || 0 || 0 = 1

*/
// console.log(true && (false || false));


let a1 = rand(0, 2);
let a2 = rand(0, 2);
let a3 = rand(0, 2);
let a4 = rand(0, 2);

console.log(a1, a2, a3, a4);

let _0 = 0;
let _1 = 0;
let _2 = 0;

// if (a1 == 0) _0++;
// if (a2 == 0) _0++;
// if (a3 == 0) _0++;
// if (a4 == 0) _0++;

// if (a1 == 1) _1++;
// if (a2 == 1) _1++;
// if (a3 == 1) _1++;
// if (a4 == 1) _1++;

// if (a1 == 2) _2++;
// if (a2 == 2) _2++;
// if (a3 == 2) _2++;
// if (a4 == 2) _2++;

if (a1 == 0) _0++;
else if (a1 == 1) _1++;
else _2++;

if (a2 == 0) _0++;
else if (a2 == 1) _1++;
else _2++;

if (a3 == 0) _0++;
else if (a3 == 1) _1++;
else _2++;

if (a4 == 0) _0++;
else if (a4 == 1) _1++;
else _2++;


console.log(_0, _1, _2);


let __2 = 0;

if (a1 == 2) __2++;
if (a2 == 2) __2++;
if (a3 == 2) __2++;
if (a4 == 2) __2++;
// kiek yra dvejetų

let __1 = a1 + a2 + a3 + a4 - (2 * __2);

let __0 = 4 - __1 - __2;

console.log(__0, __1, __2);


let x1 = rand(0, 100);
let x2 = rand(0, 100);
let x3 = rand(0, 100);

let xxx = x1 + x2 + x3;
let xxxVidurkis = xxx / 3;


console.log(x1, x2, x3);

console.log(xxxVidurkis);


let daliklis = 3;
let kaDalinam = xxx;



if (x1 <= 10 || x1 >= 90) {
    kaDalinam -= x1;
    daliklis--
}
if (x2 <= 10 || x2 >= 90) {
    kaDalinam -= x2;
    daliklis--
}
if (x3 <= 10 || x3 >= 90) {
    kaDalinam -= x3;
    daliklis--
}

console.log(kaDalinam / daliklis, kaDalinam, daliklis);


//1.
let egzaminoRezultatas = rand(1, 10);
// Išvesti rezultatą ir sprendimą ar egzaminas išlaikytas. Mažiausias išlaikymo balas yra 4

//2.
let eksperimentoRezultatas = rand(1, 4);
// Išvesti eksperimento rezultatą ir sprendimą ar pavyko. Pavykęs eksperimentas tas, kurio rezultatas 1 arba 4

//3.
let automobilioGreitis = rand(40, 125);
// Išvesti automobilio greitį ir baudos dydį, jeigu greiti didesnis nei 60. Bauda yra viršytas greitis X 5

//4.
let eilesNumeris = rand(1, 30);
// Išvesti eilės numerį ir sprendimą ar tai porinė eilė ar neporinė

//5.
let raideABC;
//Pasinaudojus funkcija rand() sugeneruoti atsitiktinę raidę A, B ar C ir priskirti ją kintamajam raideABC. Kintamąjį išvesti į konsolę

//6.
let pirmas = rand(0, 2);
let antras = rand(0, 2);
// Išvesti abu skaičius ir sprendimą ar yra didesnė tų skaičių sandauga ar suma 

//7.
let asilai = rand(0, 2);
let karves = rand(0, 2);
// Išvesti asilų ir karvių skaičių ir išvesti rezultatą "gyvulių yra" kai yra nors viena karvė ar asilas arba "gyvulių nėra" jeigu nėra nei karvių nei asilų


//8.
let dalyvis1 = rand(1, 4);
let dalyvis2 = rand(1, 4);
// Išvesti dalyvių pasirinktus skaičius ir pranešimą "Laimėjo", jeigu dalyvių skaičių suma didesnė nei 6 arba tie skaičiai yra vienodi. Pranešimą "Pralaimėjo" - priešingu atveju 


//9.
let daug = rand(1000000, 9999999);
// Išvesti skaičių daug ir suskaičiuoti iš kelių duotų skaičių: 5, 10, 33 jis dalijasi be liekanos. Rezultatą išvesti.


//10.
let as = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';
let tu = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';
// Išvesti as ir tu kintamuosius ir kas laimėjo as ar tu

let s;
s = rand(1, 3);
if (s == 1) {
    as = 'akmuo';
} else if (s == 2) {
    as = 'zirkles'
} else {
    as = 'popierius'
}
s = rand(1, 3);
if (s == 1) {
    tu = 'akmuo';
} else if (s == 2) {
    tu = 'zirkles'
} else {
    tu = 'popierius'
}

console.log(as, tu);

// console.log(28 % 2);


let kam = 2 > 1 ? '= kam jeigu true' : '= kam jeigu false';

console.log(kam);