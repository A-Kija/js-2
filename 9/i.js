let daiktas = {
    name: 'Pjūklas', // savybė
    tipas: 'Medžio pjūklas', // savybė
    dantuKiekis: 45, // savybė
    pjauti: function() { console.log('dziru dziru'); } // metodas
}

console.log(daiktas.dantuKiekis);


daiktas.pjauti();

let vardas = 'Bobikai';

let str = `Labas, ${vardas}`;


console.log(str);


console.log(str.length);


let vp = `Jo\tnas\nJonaitis\` \u{1F60D}`;

console.log(vp);

console.log('I\\\'m the Walrus!');
console.log(`I'm the "Walrus"!`);


let zuikis = 'Zuikis puikis Ilgaausis eina namo miegot';
let grazus = 'Labas vakaras';
console.log(grazus.length);
console.log(grazus[9] + grazus[100]);

grazus[9] = 'K';
console.log(zuikis.indexOf('i', 3));
console.log(zuikis.lastIndexOf('i'), 'nuo galo');



// console.log(grazus.charAt(9) + grazus.charAt(100));


let str1 = 'As sly as a fox, as strong as an ox';
let target = 'as'; // let's look for it
let pos = 0;
let foundPos;


while ((foundPos = str1.indexOf(target, pos)) !== -1) {
    console.log(`Found at ${foundPos}`);
    pos = foundPos + target.length; // continue the search from the next position
}

console.log(zuikis.includes('puikis'), 'ar yra');
console.log(zuikis.startsWith('puikis'), 'start');
console.log(zuikis.endsWith('miegot'), 'end');

console.log('-----------Slice-----------');

let zod = 'Žirafa';

console.log(zod, 'pilnas');

console.log(zod.slice(2), 'slice nuo 2');

console.log(zod.slice(1, 4), 'slice nuo 1, 4');


console.log(zod.substring(1, 4), 'substring nuo 1, 4');
console.log(zod.substring(4, 1), 'substring nuo 4, 1');

console.log(zod.substr(1, 4), 'substr nuo 1, 4');

console.log(zod.substr(-5, 4), 'substr nuo -5, 4');

//Žirafa
//irafa
//rafa
//afa
//fa
//a


/*
0       0   0   0
1       1   1   1
10      2   2   2
11      3   3   3
100     4   4   4
101     5   5   5
110     6   6   6
111     7   7   7
1000    10  8   8
1001    11  9   9
1010    12  10  A
1011    13  11  B
1100    14  12  C
1101    15  13  D
1110    16  14  E
1111    17  15  F

*/
let b = 8798798798;
console.log(b.toString(2));