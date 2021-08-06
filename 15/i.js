// const array1 = [3, 6, 10];
let suma55 = 0;
[3, 6, 10].forEach((bi, i, trecias) => suma55 += trecias[i + 1] ? bi + trecias[i + 1] : 0);

[3, 6, 10].forEach((bi, i, trecias) => {
    if (trecias[i + 1]) {
        suma55 += bi + trecias[i + 1];
    }

});

console.log(suma55);
//0 
//3 + 6 = 9 + 0 = 9
//6 + 10 = 16 + 9 = 25
// 10 + <=> 25

const array1 = [3, 6, 10];
const obj = { nulis: 3, vienas: 6, du: 10 };

array1.push(22);
obj.trys = 22;
obj.suma = function(a, b) { return a + b };

let suo = 'bobikas';

// obj.bobikas = 'bobikas';
obj[suo] = suo;


// obj.suo = 'bobikas';
obj.suo = suo;




console.log(obj, obj.vienas, obj.suma(5, 9));
console.log(array1, array1[1]);

const objektoSavybes = ['bobikas', 'sarikas', 'margis'];


//1. Sukurti tuščią objektą ir jam priskirti dvi savybes savybeA ir savybeB. Abi savybės lygios skaičiui 25
//2. Objektui pridėti savybę sumaAB, kuri yra lygi savybių sumai  
//3. Objektui pridėti savybę objektasC, kuri yra lygi tuščiam objektui
//4. Objekto savybei objektasC priskirti dvi savybes savybeA ir savybeB. Abi savybės lygios skaičiui 42
//5. Objekto savybei objektasC pridėti savybę sumaAB, kuri yra lygi objekto objektasC savybių savybeA ir savybeB sumai
//6. Objektui pridėti savybes iš masyvo: const objektoSavybes = ['bobikas', 'sarikas', 'margis']; kurios lygios 0


// const dukra = document.querySelector('#d');
// const tevas = document.querySelector('#t');
// const senelis = document.querySelector('#s');


// dukra.addEventListener('click', e => {
//     e.preventDefault();
//     console.log('Dukrelė');
// });

// senelis.addEventListener('click', e => {
//     console.log('Senis Šaltis');
// });

// tevas.addEventListener('click', e => {
//     e.stopPropagation();
//     console.log('Tėtukas');
// });

const kvads = document.querySelectorAll('.kvad').forEach(k => {
    k.addEventListener('click', e => {
        e.stopPropagation();
        e.preventDefault();
        // k.style.borderColor = 'blue';
        e.target.style.borderColor = 'blue'; // paimam ta elementa kuriame ivyko eventas
    })
})