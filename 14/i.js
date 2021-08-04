let lapai = 'Ruduo';

const sniegas = [1, 2, 3];

sniegas.push(4);

console.log(sniegas);

for (let i = 0; i < 10; i++) {

    const bla = "BLA";
    console.log(bla);

}

console.log('------------------------------------------------');


//Deklaracija
function labas(name) {
    console.log(`Labas, ${name}`);
}

//Anoniminė 1
const hello = function(name) {
    console.log(`Hello, ${name}`);
}

//Anoniminė 2
// const hi = (name) => { console.log(`Hello, ${name}`); }

const hi = name => console.log(`Hello, ${name}`);


//Kvietimas
labas('Rapolai');
labas('Zita');

hello('John');
hello('Ann');

hi('Tom');
hi('Julia');

const ezerai = [
    [2, 'Didelis'],
    [44, 'Ilgas'],
    [11, 'Trumpas'],
    [9, 'Apvalus'],
    [1, 'Gilus']
];

function ezeretuvas1(a, b) {
    return a[0] - b[0];
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

console.log(ezerai.slice().sort(ezeretuvas1));

console.log(ezerai.slice().sort((a, b) => a[0] - b[0]));

console.log(ezerai.slice().sort((a, b) => {
    if (a[1] > b[1]) {
        return 1;
    } else if (a[1] < b[1]) {
        return -1;
    } else {
        return 0;
    }
}));


console.log('-------------------EVENTAI----------------------------');


const spaustiButton = document.querySelector('button');

console.log(spaustiButton);


spaustiButton.addEventListener('click', e => {
    //
    console.log(e);
    // spaustiButton.style.display = 'none';
    //
});

spaustiButton.addEventListener('dblclick', e => {
    //
    console.log(e);
    spaustiButton.style.display = 'none';
    //
});

spaustiButton.addEventListener('mouseover', () => {
    //
    spaustiButton.style.color = 'red';
    //
});

spaustiButton.addEventListener('mouseout', () => {
    //
    spaustiButton.style.color = 'black';
    //
});