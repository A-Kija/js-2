const vardinis = {
    name: null,
    setName: function(name) {
        this.name = name;
    },
    getName: function() {
        console.log(this);
    }
}



vardinis.setName('Anatolija');

// const duok = vardinis.getName.bind(vardinis);



const z2 = {
    vardas: null,
    setName: function(vardas) {
        this.vardas = vardas;
    },
    getName: function() {
        console.log(this.vardas);
    }
};

class Zmogus {

    constructor() {
        this.vardas = null;
        // this.getName = this.getName.bind(this);
    }

    setName(vardas) {
        this.vardas = vardas;
    }

    getName = () => {
        console.log(this.vardas);
    }

}

const z1 = new Zmogus();

z1.setName('Anatolija');
z2.setName('Anatolija');

console.log(z1, z2);

const duok = z2.getName.bind(z2);
const c = 'La la ';
document.querySelector('button').
addEventListener('click', z1.getName);

document.querySelector('button').
addEventListener('click', duok);