console.log('--------------FUN-------------------');

function suma(a, b) {
    return a + b;
}

function skirtumas(a, b) {
    return a - b;
}

function skaiciuoti(v, a, b) {
    if ('sudeti' == v) {
        return suma(a, b);
    } else if ('atimti' == v) {
        return skirtumas(a, b);
    }
}


console.log(skaiciuoti('atimti', 8, 3));
console.log(skaiciuoti('sudeti', 8, 3));



function skaiciuoti2(v) {
    if ('sudeti' == v) {
        return function suma(a, b) {
            return a + b;
        };
    } else if ('atimti' == v) {
        return function skirtumas(a, b) {
            return a - b;
        };
    }
}


console.log(skaiciuoti2('atimti')(8, 3));
console.log(skaiciuoti2('sudeti')(8, 3));

let kaDaryt = skaiciuoti2('sudeti');
//
//
//
//
console.log(kaDaryt(5, 5));

const m = ['V', 'U', 'A', 'A', 'R', 'A', 'B'];


const mp = mas => mas.map(e => e == 'A' ? 'Z' : e);

console.log(mp(m));