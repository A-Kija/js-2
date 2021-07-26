// kopūstas, bulvė

let darzove = 'kopūstas';
// let darzove = 'bulvė';
// let darzove = 'pomidoras';
// let darzove = 888;



if (darzove == 'kopūstas') {
    console.log('Verdam kopūstiene');
} else if (darzove == 'bulvė') {
    console.log('Kepam bulvinius blynus');
} else if (darzove == 'pomidoras') {
    console.log('Darom kečupą');
} else {
    console.log('Nieko nedarom');
}

console.log('_______________________________________________');


switch (darzove) {
    case 'kopūstas':
        console.log('Verdam kopūstiene');
        break;
    case 'bulvė':
        console.log('Kepam bulvinius blynus');
        break;
    case 'pomidoras':
        console.log('Darom kečupą');
        break;
    default:
        console.log('Nieko nedarom');
}


console.log('_______________________________________________');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// S, M, L, XL

let siuntinioDydis = 'M';
switch (siuntinioDydis) {
    case 'S':
        console.log('Ar yra laisvų S');
        if (rand(0, 3)) {
            console.log('Vietų nėra');
        } else {
            break;
        }
    case 'M':
        console.log('Ar yra laisvų  M');
        if (rand(0, 3)) {
            console.log('Vietų nėra');
        } else {
            break;
        }

    case 'L':
        console.log('Ar yra laisvų  L');
        if (rand(0, 3)) {
            console.log('Vietų nėra');
        } else {
            break;
        }

    default:
        console.log('Ar yra laisvų  XL');
        if (rand(0, 3)) {
            console.log('Visai visai vietų nėra');
        }
}


console.log('_______________________________________________');



// Nuo 77 iki 777 reikia surasti pirmą skaičių kuris dalinasi iš 23 be liekanos

bigCycle: for (let i = 1; i <= 3; i++) {

    for (let i = 77; i <= 777; i++) {

        // console.log('mažas');
        // break;
        if (i % 23 === 0) {
            console.log(i);
            break bigCycle;
        }
    }


}


console.log('_______________________________________________');

// Nelabai gerai, bet labai aišku
for (let i = 77; i <= 777; i++) {

    console.log('mažas');
    // break;
    if (i % 23 === 0) {
        console.log(i);
        break;
    }

}

// Nelabai gerai
let counter = 0;
while (true) {
    console.log(counter);
    counter++;
    if (counter >= 10) {
        break;
    }
}


// Dauguma break galima pakeisti į while
let skaicius = 77;
do {

} while (++skaicius % 23 !== 0);

console.log('while', skaicius);

let sk = 7;
let c = 858;
let iki = 777 - sk;

do {} while (iki-- && (++sk % 7 || --c)); // žvaigždių karams.

console.log(sk);