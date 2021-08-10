// Kintamųjų deklaravimas

let vienas = 'namuose';

let bb;

const du = 'gaideliai';

// const aa; blogai

vienas = 'kazkam';

// du = 'kazkam'; blogai

const trys = ['a', 'b'];
console.log(trys);
trys.push('c');
console.log(trys);

// trys = ['a', 'b', 'c']; blogai

let penki;

if (true) {
    let keturi = 4;
    if (true) {
        let keturi = 44;
        console.log(keturi);
        penki = 6;
    }
    console.log(keturi);
}

let a1 = 5;
let a2 = [5];

console.log(a2.slice());

let b1 = a1;
let b2 = a2;

a1++;
a2.push(6);

console.log(a2);

console.log(a1, a2); // 6
console.log(b1, b2); // b = a

console.log('-------------------------------');

console.log(a2);

const [c, d] = a2;
// tas pat
// const c = a2[0];
// const d = a2[1];

console.log(c, d);

const masyvas = ['vienas', 'žalias', 'ir', 'trys', 'raudoni'];
// for
// while
// forEach
// for in

console.log('--------------for-------------------');
for (let i = 0; i < masyvas.length; i++) {
    console.log(masyvas[i]);
}

console.log('--------------while-------------------');
let w = 0;
while (w < masyvas.length) {
    console.log(masyvas[w]);
    w++;
}

console.log('--------------forEach-------------------');
masyvas.forEach(e => console.log(e));


console.log('--------------for in-------------------');
for (const i in masyvas) {
    console.log(masyvas[i]);
}

console.log('--------------for of-------------------');
for (const i of masyvas) {
    console.log(i);
}

// Deklaravimas
function vardas(v = 'John') {
    console.log(`Ja ja, ${v}`);
    return 'Valio';
}


// Kvietimas
vardas('Jonas');
vardas('Janina');
vardas('Brisius');

const rez = vardas;

console.log(rez());


function pirma() {
    function antra() {
        // console.log('labaS');
        return [5, 9, 'Labas'];
    }
    return antra;
}

const fun = () => () => () => [5, 9, 'Labas'];

console.log(fun()()());

// const antraF = pirma();
// antraF();


console.log('--------------FUN-------------------');

const ff = function(e) {
    console.log(e);
}

console.log(masyvas.map(e => console.log(e)));



// masyvas.forEach(function(e) {
//     console.log(e)
// });
// masyvas.forEach(ff);