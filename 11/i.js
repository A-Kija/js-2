let a1 = ['atsuktuvas', 'pjūklas', 'plaktukas', 'replės'];

console.log(a1);

// a1[4] = 'kirvis';

a1.push('kaltas'); // prideda elementą į pabaigą
console.log(a1.slice(), a1);

a1.unshift('grąžtas'); // prideda elementą į pradžią
console.log(a1);

a1.shift(); // išima pirmą elementą
console.log(a1);

a1.pop(); // išima paskutinį elementą
console.log(a1);

// console.log(a1[42]);

// console.log(a1);


let d1 = 5;
let d2 = d1; // priskyrimas pagal reikšmę
d1 = 7;
console.log(d1, d2);


let m1 = [77, 99];
let m2 = m1; // priskyrimas pagal nuorodą
let m3 = m2.slice(); // masyvo kopijos padarymas

m1.push(11);
m2.push(55);
m3.push('katė');

// m2 = 5;


console.log('m1:', m1, 'm2:', m2, 'm3:', m3);

// let string4 = "A String object";

// console.log(typeof string4);

// console.log(new Number(77));

// ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI']
// 'MasterCard', 'Visa'

 