console.log('---------------Kibiras1');


// Daro Marytė
class Kibiras1 {

    static visiAkmenys = 0;

    static akmenuSkaiciusVisuoseKibiruose() {
        console.log('Visuose kibiruose yra akmenų:', this.visiAkmenys);
    }

    static bendrasAkmenuSkaicius(akmenuSkaicius) {
        this.visiAkmenys += akmenuSkaicius;
    }

    // this === klase

    //----------------------------------------

    //this === objektas

    constructor() {
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni() {
        this.akmenuKiekis++; // i objekta, kokretus kibiras
        this.constructor.bendrasAkmenuSkaicius(1); // i bendra statine, t.y. visiems kibirams
        //this.constructor === Kibiras1
        //this.constructor Sitas objektas (this) yra konstruojamas (constructor) ===> Klase
    }
    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
        Kibiras1.bendrasAkmenuSkaicius(kiekis);
    }
    kiekPririnktaAkmenu() {
        console.log('Kibire akmenų:', this.akmenuKiekis);
    }
}
// Marytės pabaiga


// Marius

const viedras55 = new Kibiras1();
const viedras66 = new Kibiras1();
const viedras77 = new Kibiras1();


console.log(viedras55);


viedras55.prideti1Akmeni();
viedras55.pridetiDaugAkmenu(9);
viedras55.kiekPririnktaAkmenu();

viedras66.prideti1Akmeni();
viedras66.pridetiDaugAkmenu(19);
viedras66.kiekPririnktaAkmenu();

viedras77.prideti1Akmeni();
viedras77.pridetiDaugAkmenu(29);
viedras77.kiekPririnktaAkmenu();

Kibiras1.akmenuSkaiciusVisuoseKibiruose();

// Mariaus pabaiga

console.log('---------------TRoleiBUSas------------');

class Troleibusas {

    keleiviuSkaicius = 0; // Fieldas, vietoj konstruktoriaus
    f1;
    f2;
    static visiKeleiviai = 0;

    static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
        this.visiKeleiviai += keleiviuSkaicius;
    }

    static keleiviuSkaiciusVisuoseTroleibusuose() {
        console.log(`Visais Trūlai važiuoja: ${this.visiKeleiviai}`);
    }

    constructor(sk = 5) {
        this.f1 = sk;
        // perkelta i fielda
    }

    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius += keleiviuSkaicius;
        this.constructor.bendrasKeleiviuSkaicius(keleiviuSkaicius);
    }

    islipa(keleiviuSkaicius) {
        if (this.keleiviuSkaicius < keleiviuSkaicius) {
            keleiviuSkaicius = this.keleiviuSkaicius;
        }
        this.keleiviuSkaicius -= keleiviuSkaicius;
        this.constructor.bendrasKeleiviuSkaicius(-keleiviuSkaicius);
    }

    vaziuoja() {
        console.log(`Trūlu važiuoja: ${this.keleiviuSkaicius}`);
    }

}

const nr4 = new Troleibusas();
const nr10 = new Troleibusas();


nr4.ilipa(5);
nr4.islipa(2);
nr4.vaziuoja();

console.log('KS:', nr4.keleiviuSkaicius);

nr10.ilipa(1);
nr10.islipa(28);
nr10.vaziuoja();
Troleibusas.keleiviuSkaiciusVisuoseTroleibusuose();

// console.log(Troleibusas.metodas());