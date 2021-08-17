class Animal {

    static animals = []; // Visi gyvuliai ir žvėrys

    element; // nuoroda į html tagą su animalu

    static start() {
        this.buttonCreate();
        //Laikinai
        // Animal.createAnimal('Arklys', 50, 'orange', false);
        // Animal.createAnimal('Ruonis', 0, 'grey', false);
        // Animal.createAnimal('Briedis', 10, 'mixed brown', true);
        // Animal.createAnimal('Stumbras', 15, 'dark-wood', true);
        //Laikinai pabaiga

        this.load();
    }

    static deleteAnimal(id) {
        this.animals.forEach((animal, index) => {
            if (id == animal.id) {
                this.clearZoo();
                this.animals.splice(index, 1);
                this.renderZoo();
            }
        });
        this.save();
    }

    static createAnimal(specie, tailLong, color, hasHorn) {
        this.clearZoo(); // iš html'o ištrinam visus gyvulius
        this.animals.push(new Animal(specie, tailLong, color, hasHorn));
        this.renderZoo(); // iš naujo sudedame visus gyvulius į html'ą
        this.save();
    }

    static save() {
        const data = [];
        this.animals.forEach(animal => {
            data.push({
                specie: animal.specie,
                tail: animal.tail,
                color: animal.color,
                horn: animal.horn
            })
        });
        localStorage.setItem('zooApp', JSON.stringify(data));
    }

    static load() {
        if (null === localStorage.getItem('zooApp')) {
            localStorage.setItem('zooApp', JSON.stringify([]));
        }
        JSON.parse(localStorage
                .getItem('zooApp'))
            .forEach(animal => this.createAnimal(animal.specie, animal.tail, animal.color, animal.horn));
    }

    static renderZoo() {
        this.animals.forEach(animal => animal.render());
    }

    static clearZoo() {
        this.animals.forEach(animal => document.querySelector('#animals').removeChild(animal.element));
    }

    static buttonCreate() {
        const specie = document.querySelector('#specie');
        const tail = document.querySelector('#tail');
        const color = document.querySelector('#color');
        const horn = document.querySelector('#horn');
        document.querySelector('button#create').
        addEventListener('click', () => {
            this.createAnimal(specie.value, tail.value, color.value, horn.checked);
        });
    }


    constructor(specie, tailLong, color, hasHorn) {
        this.specie = specie;
        this.tail = tailLong;
        this.color = color;
        this.horn = hasHorn;
        this.createAnimalRandom();
    }


    render() {
        this.createAnimalElement();
        this.createAnimalHtml();
        this.deleteButton(); // butono eventas
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
        //TODO check uniquiness
        this.id = Math.floor(Math.random() * 9000000) + 1000000;
    }

    deleteButton() {
        this.element.querySelector('.btn-danger')
            .addEventListener('click', () => this.constructor.deleteAnimal(this.id));
        //this.constructor == Animal Class
    }

};

Animal.start();