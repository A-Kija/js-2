const setas = new Set(['Lietus', 'Sniegas', 'Pūga', 'Šlabdriba', 'Vėtra', 'Sniegas']);


console.log(setas);

const mas = [...setas];

console.log(mas);

localStorage.setItem('orai', JSON.stringify(mas));


const setas3 = new Set([...JSON.parse(localStorage.getItem('orai'))]);


const a = { lietus: 5 };
const b = { lietus: 5 };
const c = { lietus: 5 };

const setas2 = new Set([a, b, c, b, c]);

console.log(setas2);
console.log(setas3);


const m = [];
m[99999999] = 2;

console.log(m);


// m.forEach(e => {
//     if (e == 2) {
//         console.log('forEach pabaiga');
//     }
// });

for (const e of m) {
    if (e == 2) {
        console.log('forEach pabaiga');
    }
}

console.log('galas');