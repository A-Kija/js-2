function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// + - / * %
let box1 = 8;
let box2 = 3;
let rezult = 10;

// rezult = rezult + box1;
rezult += box1;

// rezult = rezult + 1;

rezult = 10;

let rezult1 = rezult++ + rezult++;

rezult1++;

// console.log(rezult1);
// console.log(rezult);

let box3 = 'labas';

box3 = box3 * 1; // ---> NaN Not a Number

// console.log(6 + 2)

// console.log(Number('55'));

// console.log(Boolean(664645));


// undefined, Infinity, NaN

// console.log('3 > 5', 3 > 5);
// console.log('3 < 5', 3 < 5);
// console.log('3 != 5', 3 != 5);

// console.log('Z > A', 'Z' > 'A');
// console.log('z > Z', 'z' > 'Z');
// console.log('z < z123', 'z' < 'z123');

// console.log(rand(5, 10));

let check = rand(1, 9);

if (check < 5) {

    if (8 < 5) {

    }
    console.log('TAIP!');
    console.log(check);

} else if (check == 5) {

    console.log('Lygu!');
    console.log(check);

} else {

    console.log('NE!');
    console.log(check);
}


console.log('Ate!');





if (2 < 5 && 6 < 9) {} //1 && 1 => true
if (2 < 5 || 6 < 9) {} // 0 || 1 , 1 || 0 => true




//1

let r1 = rand(0, 4);
let r2 = rand(0, 4);

if (r1 * r2 == 0) {
    console.log('dalyba iš nulio');
} else if (r1 < r2) {
    console.log(r2 / r1);
} else {
    console.log(r1 / r2)
}