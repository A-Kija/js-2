class Animal {

    static animals = [];

    static createAnimal(specie, tailLong, color, hasHorn) {
        this.animals.push(new Animal(specie, tailLong, color, hasHorn));
    }

    static renderZoo() {
        this.animals.forEach(animal => animal.render());
    }

    static clearZoo() {
        this.animals.forEach(animal => document.querySelector('#animals').removeChild(animal.element));
    }


    constructor(specie, tailLong, color, hasHorn) {
        this.specie = specie;
        this.tail = tailLong;
        this.color = color;
        this.horn = hasHorn;
    }


    render() {
        this.createAnimalElement();
        this.createAnimalHtml();
    }


    createAnimalElement() {
        this.element = document.createElement('div');
        this.element.classList.add('m-3');
        document.querySelector('#animals').appendChild(this.element);

    }


    createAnimalHtml() {
        const horn = this.horn ? 'With horn' : 'Without horn';
        const html = `
        <div class="card" style="width: 21rem;">
            <div class="card-body">
                <h5 class="card-title">${this.specie}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Color: ${this.color}</h6>
                <p class="card-text">Tail long: ${this.tail} cm. <i> ${horn} </i></p>
                <button type="button" class="btn btn-success">Edit</button>
                <button type="button" class="btn btn-danger">Delete</button>
            </div>
        </div>
        `;
        this.element.innerHTML = html;
    }
    createAnimalRandom() {
        this.id = Math.floor(Math.random() * 9000000) + 1000000;
    }

};

// const mas = [];

// mas.push(new Animal('Arklys', 50, 'orange', false));
// mas.push(new Animal('Ruonis', 0, 'grey', false));
// mas.push(new Animal('Briedis', 10, 'mixed brown', true));
// mas.push(new Animal('Stumbras', 15, 'dark-wood', true));

Animal.createAnimal('Arklys', 50, 'orange', false);
Animal.createAnimal('Ruonis', 0, 'grey', false);
Animal.createAnimal('Briedis', 10, 'mixed brown', true);
Animal.createAnimal('Stumbras', 15, 'dark-wood', true);

// Animal.animals[2].render();


Animal.renderZoo();

// Animal.clearZoo();

// console.log(mas);

const specie = document.querySelector('#specie');
const tail = document.querySelector('#tail');
const color = document.querySelector('#color');
const horn = document.querySelector('#horn');

document.querySelector('button#create').
addEventListener('click', () => {
    Animal.clearZoo();
    Animal.createAnimal(specie.value, tail.value, color.value, horn.checked);
    Animal.renderZoo();
});