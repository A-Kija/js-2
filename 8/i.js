// kopūstas, bulvė

// let darzove = 'kopūstas';
let darzove = 'bulvė';
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

    case 'bulvė':
        console.log('Kepam bulvinius blynus');

    case 'pomidoras':
        console.log('Darom kečupą');

    default:
        console.log('Nieko nedarom');
}


console.log('_______________________________________________');


// S, M, L, XL

let siuntinioDydis = 'M';
switch (siuntinioDydis) {
    case 'S':
        console.log('Ar yra laisvų S');
    case 'M':
        console.log('Ar yra laisvų  M');
    case 'L':
        console.log('Ar yra laisvų  L');
    default:
        console.log('Ar yra laisvų  XL');
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