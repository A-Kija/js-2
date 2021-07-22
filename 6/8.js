function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let random;
//8A
console.log('----------8A------------');
do {
    random = rand(10, 25);
    console.log(random);

} while (random >= 12);


//8B
console.log('----------8B------------');
let visoCiklu = 0;
do {
    random = rand(10, 25);
    visoCiklu++;
} while (random >= 12);

console.log(visoCiklu, random);



//8C
let suma = 0;
console.log('----------8C------------');
do {
    random = rand(10, 25);
    suma += random > 18 ? 0 : random;

} while (random >= 12);
console.log(suma);


//8D
suma = 0;
let atmesta = 0;

let suma1 = 0;
let atmesta1 = 0;

console.log('----------8D------------');
do {
    random = rand(10, 25);
    random > 18 ? atmesta++ : suma += random; // <---- nera

    console.log(random);

    if (random <= 18) {
        suma1 = suma1 + random;
    } else {
        atmesta1++;
    }

} while (random >= 12);
console.log(suma, atmesta);
console.log(suma1, atmesta1);

//8E
let lyginis = 0;
let nelyginis = 0;
console.log('----------8E------------');
do {
    random = rand(10, 25);

    console.log(random);
    if (random % 2 === 0) {
        lyginis++;
    } else {
        nelyginis++;
    }

} while (random >= 12);
console.log(lyginis, nelyginis);


//8F

console.log('----------8F------------');
let visoMazuCiklu;
// let visoDideliuCiklu = 0;
do {
    visoMazuCiklu = 0;
    // visoDideliuCiklu++;
    do {
        random = rand(10, 25);
        visoMazuCiklu++;
    } while (random >= 12);

} while (visoMazuCiklu <= 20);

console.log(visoMazuCiklu);


//9A
console.log('----------9A------------');
let isridenta;
let mCiklas = 0;
let dCiklas = 0;
do {
    isridenta = rand(1, 6);

    dCiklas++;

    for (let i = 0; i < isridenta; i++) {
        mCiklas++;
    }

} while (isridenta != 5);

console.log(dCiklas, mCiklas);