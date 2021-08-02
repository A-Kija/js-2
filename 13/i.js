let masyvas = ['auu', 'ci', 'dqqq', 'brfrf'];
let foto = ['šuo', 'katė', 'automobilis', 'namas', 'kiemas']


let ezerai = [
    [2, 'Didelis'],
    [44, 'Ilgas'],
    [11, 'Trumpas'],
    [9, 'Apvalus'],
    [1, 'Gilus']
];

console.log('a:', ezerai[2][1]);
console.log('b:', ezerai[1][1]);

console.log('SORTAS', ezerai.sort());

console.log(masyvas.slice());

function lygintuvas(a, b) {
    console.log('a:', a, 'b: ', b);
    if (a.length > b.length) {
        return 1;
    } else if (a.length < b.length) {
        return -1;
    } else {
        return 0;
    }
}

function ezeretuvas(a, b) {
    console.log('a:', a, 'b: ', b);
    if (a[1] > b[1]) {
        return 1;
    } else if (a[1] < b[1]) {
        return -1;
    } else {
        return 0;
    }
}

function ezeretuvas1(a, b) {
    return a[0] - b[0];
}




foto.sort(lygintuvas);

console.log(ezerai.slice().sort(ezeretuvas));
console.log(ezerai.sort(ezeretuvas1));




// let newH12 = document.createElement("h1");



// newH12.appendChild(labasVakaras);

// let oldH1 = document.querySelector(".old");
// let body = document.querySelector("body");


// container.insertBefore(newH1, oldH1);
// container.appendChild(newH1);
// container.appendChild(newH1);
// container.appendChild(newH1);
// container.appendChild(newH1);



//1. Sukuriam elementą
let newH1 = document.createElement("h1");

//2. Sukuriam text nodą
let labasVakaras = document.createTextNode("Labas Vakaras!");

//3. Text nodą įdedame į elementą
newH1.appendChild(labasVakaras);

//4. Surandam html'e tėvinį tagą į kurį dėsim elementą
let container = document.querySelector(".container");

//5. Į tėvą įdedame sukurtą elementą
container.appendChild(newH1);

container.style.backgroundColor = 'blue';
container.style.border = '5px solid yellow';
container.style.padding = '25px';

newH1.style.color = '#e5aacc';


let h1 = document.querySelector(".old");

h1.classList.add('bla'); // be tasko

h1.classList.remove('old');

console.log(container);
// console.log(oldH1);
// console.log(body);

let lis = document.querySelectorAll("li");

for (i = 0; i < lis.length; i++) {
    if (i % 3 === 0) {
        lis[i].style.color = 'green';
    }
}


console.log(lis);