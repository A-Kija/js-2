function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let i;

if (i < 5) {
    console.log('IF');
}



// nuo 0 iki daug
while (i != 55) {
    i = rand(0, 100);
    console.log('WHILE', i);
}

// nuo 1 iki daug
do {
    i = rand(0, 100);
    console.log('DO WHILE', i);
} while (i != 55);


let j = 0;
while (j < 5) {
    console.log('Jotas: ', j);
    j++;
}

for (let t = 0; t < 5; t++) {
    console.log('Totas: ', t);
}

let a = rand(5, 25);
let b = rand(5, 25);
let c = rand(5, 25);


let d = a + ' ' + b + ' ' + c + ' ' + (a + b + c);

console.log(d);

//2.
let kint = rand(5, 10);
console.log('-2-', kint);

//4. 
for (let i = 0; i < 7; i++) {
    console.log('-4-', kint);
}

//5. 
for (let i = 0; i < kint; i++) {
    console.log('-5-', kint);
}

//7.
//A.
let kint7A;
for (let i = 0; i < 5; i++) {
    kint7A = rand(10, 20);
    console.log('-7A-', kint7A);
}

//B.
let kint7B = 0;
for (let i = 0; i < 5; i++) {
    kint7B += rand(10, 20);
    console.log('-7B-', kint7B);
}

//D.
let kint7D = '';
let suma7D = 0;
for (let i = 0; i < 5; i++) {
    let randomas = rand(10, 20);
    kint7D += randomas + ' ';
    suma7D += randomas;
}
kint7D += suma7D;
console.log('-7D-', kint7D);

//8e
let e8rand;
let lyg = 0;
let nelyg = 0;
let row = ''; // nereik uzdaviniui
let aw = []; // masyvas
do {
    e8rand = rand(10, 25);
    aw.push(e8rand);
    e8rand % 2 ? nelyg++ : lyg++; //(e8rand % 2 === 1)

    row += e8rand + ' '; // nereik uzdaviniui


} while (e8rand >= 12);
console.log(aw);
console.log(lyg, nelyg, row);