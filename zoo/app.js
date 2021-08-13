class Animal {
    constructor(specie, tailLong, color, hasHorn) {
        this.specie = specie;
        this.tail = tailLong;
        this.color = color;
        this.horn = hasHorn;
        console.log(specie);
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

const mas = [];

mas.push(new Animal('Arklys', 50, 'orange', false));
mas.push(new Animal('Ruonis', 0, 'grey', false));
mas.push(new Animal('Briedis', 10, 'mixed brown', true));
mas.push(new Animal('Stumbras', 15, 'dark-wood', true));

console.log(mas);

const specie = document.querySelector('#specie');
const tail = document.querySelector('#tail');
const color = document.querySelector('#color');
const horn = document.querySelector('#horn');

document.querySelector('button#create').
addEventListener('click', () => {
    mas.push(new Animal(specie.value, tail.value, color.value, horn.checked));
});