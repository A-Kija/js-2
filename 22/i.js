console.log('---------------Kibiras1');

class Kibiras1 {
    constructor() {
        this.akmenuKiekis = 0;
    }
    prideti1Akmeni() {
        this.akmenuKiekis++;
        // this.kiekPririnktaAkmenu();
    }
    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
        // this.kiekPririnktaAkmenu();
    }
    kiekPririnktaAkmenu() {
        console.log('Kibire akmenų:', this.akmenuKiekis);
    }
}

const viedras55 = new Kibiras1();

viedras55.kiekPririnktaAkmenu();
viedras55.prideti1Akmeni();
viedras55.kiekPririnktaAkmenu();
viedras55.prideti1Akmeni();
viedras55.prideti1Akmeni();
viedras55.prideti1Akmeni();
viedras55.kiekPririnktaAkmenu();
viedras55.pridetiDaugAkmenu(16);
viedras55.pridetiDaugAkmenu(10);
viedras55.prideti1Akmeni();
viedras55.prideti1Akmeni();
viedras55.prideti1Akmeni();
// viedras55.kiekPririnktaAkmenu();


console.log('---------------TV---------------------');


class TV {

    static programa = ['LRT', 'TV3', 'LNK', 'Polonia'];

    static naujaPrograma(pr) {
        this.programa = pr; // this rodo į klase
    }

    constructor() {
        this.savininkas = 'Parduotuvė'; // this rodo į objektą
        this.kanalas = null;
    }

    pirkimas(vardas) {
        this.savininkas = vardas;
    }
    perjungtiKanala(nr) {
        this.kanalas = nr;
    }
    infoApieTv() {
        console.log(this.constructor.name)
        console.log(
            `
            Savininkas: ${this.savininkas} 
            Kanalas: ${this.kanalas}
            Programa: ${TV.programa[this.kanalas]}
            `
        );
    }
}

const tv1 = new TV();
const tv2 = new TV();
const tv3 = new TV();

tv2.pirkimas('Antanas');

tv3.pirkimas('Birutė');
tv3.perjungtiKanala(2);
tv2.perjungtiKanala(2);

tv1.infoApieTv();
tv2.infoApieTv();
TV.naujaPrograma(['MTV', 'TNT', 'Sports', 'RenTv']);
tv3.infoApieTv();