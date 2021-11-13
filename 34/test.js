//1. Duotas masyvas, console.log atspausdinti masyvo ilgį
const mas1 = [12, 5, 9, 7, 5, 4];

//2. Duotas masyvas, masyvą iteruoti ciklu for ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę;
const mas2 = [13, '785', 92, 'labas', 522, 6984];

//3. Duotas masyvas, masyvą iteruoti ciklu for ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę, jeigu ta reikšmė yra lyginė (porinė)
const mas3 = [889, 52, 698, 752, 9333, 7];

//4. Duotas masyvas, masyvą iteruoti ciklu forEach ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę, jeigu ta reikšmė prasideda raide A arba a
const mas4 = ['Agurkas', 'Bananas', 'arbūzas', 'Bebras', 'Voverė', 'Ąžuolas', 'Mažas triušis'];

//5. Duotas stringas, suskaičiuoti kiek stringe yra raidžių z
const str1 = 'Storas zebras, bėga nuo zuulu genties medžiotojų.';

//6. Duotas Setas, į kurį reikia pridėti reikšmes (stringus) 'Labas' ir 'Ate' ir console.log
// atspausdinti Seto ilgį
const set1 = new Set(['Labas', 'Vakaras', 'Rytas', 'Valio']);

//7. Suprototaipinti standartinį String tipo objektą, pridedant metodą lastCharIs(), 
// kuris grąžintų paskutinį stringo simbolį. Pademonstruoti veikimą su stringu 'Ku Ku';
const str2 = new String('Ku ku');
// console.log(str2.lastCharIs()) po prototaipinimo eilutė turi veikti

//8. Duotas objektas, kurį reikia iteruoti, kiekvienoje iteracijoje išvedant savybę
// ir jos reikšmę
const obj1 = { labas: 'vakaras', laba: 'diena', labs: 'ryts' };

//9. Sukurti klasę Grybas. Klasėje sukurti savybė tipas. Iš klasės sukurti
// 3 Grybo objektus, savybei tipas priskiriant "Baravykas", "Ūmedė" ir "Lepšis"

mas4.forEach((s, i) => {
    if (s[0] == 'a' || s[0] == 'A' || s[0] == 'Ą') {
        console.log(i, s);
    }
});

set1.add("Labas");
set1.add("Ate");
console.log(set1, set1.size);

String.prototype.lastCharIs = function() {
    return this.valueOf()[this.valueOf().length - 1];
}

String.prototype.lastCharIs = function() {
    return 'Valio';
}

console.log(str2.lastCharIs());
console.log(str2);


const map = new Map([
    ['a', 'labas'],
    ['b', 'ate'],
    ['x', 'xxx']
]);

console.log(map);






class A {
    static labas() {
        for (const s of map) {
            console.log(s[0], s[1]);
        }
    }
}

A.labas();

// console.log(s);

// map.forEach(a => console.log(a));

class Grybas {
    tipas;

    constructor(tipas) {
        this.tipas = tipas;
    }
}

const G = new Grybas("Baravykas");



Grybas.prototype.Tipas = function() {
    return this.tipas;
}


console.log(G.Tipas());

console.log(
    new Grybas("Baravykas"),
    new Grybas("Ūmedė"),
    new Grybas("Lepšis"),
);

class C {

    constructor() {
        this.nu = this.nu.bind(this);
    }

    sayHello() {
        console.log('CCCCCCCCCCCC');
    }

    nu() {
        this.sayHello();
        // console.log(this);
    }

}

const bObjC = new C();


class B {

    constructor(c) {
        this.nu = this.nu.bind(c);
    }

    sayHello() {
        console.log('Nu, Hello');
        return function() {
            console.log('super');
        }
    }

    nu() {
        this.sayHello();
        // console.log(this);
    }

}

const bObj = new B(bObjC);








document.querySelector('button').addEventListener('click', bObj.nu);


function abc(call) {
    for (let i = 0; i < 13; i++) {
        call();
    }
}



// abc(bObj.nu);

abc(bObj.sayHello);