class Animal {

    static animals = []; // Visi gyvuliai ir žvėrys
    static showAnimals = []; // Visi RODOMI gyvuliai ir žvėrys
    static filterSet;

    element; // nuoroda į html tagą su animalu

    static start() {
        this.buttonCreate();
        this.buttonHideModal();
        this.buttonEdit();
        this.buttonConfirmDelete();
        this.sortButton();
        this.filterButton();
        this.showAllButton();
        // Laikinai
        // Animal.createAnimal('Arklys', 50, 'orange', false);
        // Animal.createAnimal('Ruonis', 0, 'grey', false);
        // Animal.createAnimal('Briedis', 10, 'mixed brown', true);
        // Animal.createAnimal('Stumbras', 15, 'dark-wood', true);
        // Laikinai pabaiga

        this.load();
    }

    static deleteAnimal(id) {
        this.animals.forEach((animal, index) => {
            if (id == animal.id) {
                this.clearZoo();
                this.animals.splice(index, 1);
                this.showAnimals = this.animals.slice();
            }
        });
        this.save();
        this.renderZoo();
    }

    static editAnimal(id, specie, tailLong, color, hasHorn) {
        this.animals.forEach(animal => {
            if (id == animal.id) {
                this.clearZoo();
                animal.specie = specie;
                animal.tail = tailLong;
                animal.color = color;
                animal.horn = hasHorn;
            }
        });
        this.save();
        this.renderZoo();
        this.hideModal('edit');
    }

    static createAnimal(specie, tailLong, color, hasHorn) {
        this.clearZoo(); // iš html'o ištrinam visus gyvulius
        this.animals.unshift(new Animal(specie, tailLong, color, hasHorn));
        this.showAnimals = this.animals.slice();
        this.save();
        this.renderZoo(); // iš naujo sudedame visus gyvulius į html'ą

    }

    static save() {
        const data = [];
        this.animals.forEach(animal => {
            data.unshift({
                specie: animal.specie,
                tail: animal.tail,
                color: animal.color,
                horn: animal.horn
            })
        });
        localStorage.setItem('zooApp', JSON.stringify(data));
        this.makeFilterSet();
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
        this.showAnimals.forEach(animal => animal.render());
        this.filterSelect();
    }

    static clearZoo() {
        // this.animals.forEach(animal => document.querySelector('#animals').removeChild(animal.element));
        document.querySelector('#animals').innerHTML = '';
        this.clearFilterSelect();
    }

    static showEditModal(animal) {
        const modal = document.querySelector('#edit');
        modal.style.display = 'block';
        modal.style.opacity = 1;
        modal.querySelector('.btn-primary').dataset.id = animal.id;

        const specie = document.querySelector('#edit [name=specie]');
        const tail = document.querySelector('#edit [name=tail]');
        const color = document.querySelector('#edit [name=color]');
        const horn = document.querySelector('#edit [name=horn]');

        specie.value = animal.specie;
        tail.value = animal.tail;
        color.value = animal.color;
        horn.checked = animal.horn;


    }

    static showDeleteConfirmModal(id) {
        const modal = document.querySelector('#confirm-delete');
        modal.style.display = 'block';
        modal.style.opacity = 1;
        modal.querySelector('.btn-primary').dataset.id = id;
    }

    static showSorted(id) {

        const dir = document.querySelector('#sort_asc').checked ? 1 : -1;
        if ('sort_tail_long' == id) {
            this.animals.sort(function(a, b) {
                return dir * (a.tail - b.tail);
            });
        }

        if ('sort_specie' == id) {
            this.animals.sort(function(a, b) {
                const nameA = a.specie.toUpperCase(); // ignore upper and lowercase
                const nameB = b.specie.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -dir;
                }
                if (nameA > nameB) {
                    return dir;
                }
                // names must be equal
                return 0;
            });
        }
        this.clearZoo(); // iš html'o ištrinam visus gyvulius
        this.renderZoo(); // iš naujo sudedame visus gyvulius į html'ą

    }

    static showFiltered() {
        const filterValue = document.querySelector("#animals_list").value;
        const an = [];
        this.showAnimals = this.animals.slice();
        this.showAnimals.forEach((animal, i) => {
            if (animal.specie == filterValue) {
                an.push(animal);
            }
        });
        this.showAnimals = an;
        this.clearZoo();
        this.renderZoo();
        // document.querySelectorAll('#animals button').forEach(b => {
        //     b.setAttribute('disabled', true);
        // })
    }

    static rerender = () => {
        this.clearZoo(); // iš html'o ištrinam visus gyvulius
        this.renderZoo(); // iš naujo sudedame visus gyvulius į html'ą
    }

    static makeFilterSet() {
        this.filterSet = new Set();
        this.animals.forEach(animal => this.filterSet.add(animal.specie));
        this.filterSet = new Set([...this.filterSet].sort());
    }


    static filterSelect() {
        if (undefined === this.filterSet) {
            return;
        }
        const select = document.querySelector('#animals_list');
        this.filterSet.forEach(a => {
            const element = document.createElement('option');
            element.innerText = a;
            element.value = a;
            select.appendChild(element);
        });
    }

    static clearFilterSelect() {
        document.querySelector('#animals_list').innerHTML = '';
    }



    static hideModal(id) {
        const modal = document.querySelector('#' + id);
        modal.style.display = 'none';
        modal.style.opacity = 0;
        delete modal.querySelector('.btn-primary').dataset.id;
    }

    static buttonCreate() {
        const specie = document.querySelector('#create [name=specie]');
        const tail = document.querySelector('#create [name=tail]');
        const color = document.querySelector('#create [name=color]');
        const horn = document.querySelector('#create [name=horn]');
        document.querySelector('button#create').
        addEventListener('click', () => {
            this.createAnimal(specie.value, tail.value, color.value, horn.checked);
        });
    }

    static buttonEdit() {
        const specie = document.querySelector('#edit [name=specie]');
        const tail = document.querySelector('#edit [name=tail]');
        const color = document.querySelector('#edit [name=color]');
        const horn = document.querySelector('#edit [name=horn]');
        document.querySelector('.modal .btn-primary').
        addEventListener('click', (e) => {
            this.editAnimal(e.target.dataset.id, specie.value, tail.value, color.value, horn.checked);
        });
    }

    static buttonConfirmDelete() {
        document.querySelector('#confirm-delete .btn-primary').
        addEventListener('click', (e) => {
            this.deleteAnimal(e.target.dataset.id);
            this.hideModal('confirm-delete');
        });
    }

    static buttonHideModal() {
        document.querySelectorAll('[data-dismiss=modal]')
            .forEach(b => b.addEventListener('click', (e) => this.hideModal(e.target.closest('.modal').id)));
    }

    static sortButton() {
        document.querySelectorAll('#sort_specie, #sort_tail_long')
            .forEach(b => {
                b.addEventListener('click', e => this.showSorted(e.target.id))
            });
    }

    static filterButton() {
        document.querySelector('#filter').
        addEventListener('click', (e) => this.showFiltered());
    }

    static showAllButton() {
        document.querySelector('#all').
        addEventListener('click', (e) => {
            this.animals = [];
            this.load();
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
        this.editButton(); // butono eventas
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

    // deleteButton() {
    //     this.element.querySelector('.btn-danger')
    //         .addEventListener('click', () => this.constructor.deleteAnimal(this.id));
    //     //this.constructor == Animal Class
    // }

    deleteButton() {
        this.element.querySelector('.btn-danger')
            .addEventListener('click', () => this.constructor.showDeleteConfirmModal(this.id));
        //this.constructor == Animal Class
    }


    editButton() {
        this.element.querySelector('.btn-success')
            .addEventListener('click', () => this.constructor.showEditModal(this));
        //this.constructor == Animal Class
    }

};

Animal.start();