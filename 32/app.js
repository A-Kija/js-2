class BookShelf {
    bookShelf;
    element;
    constructor(...books) {
        this.bookShelf = new Set(books);
        this.createHtml();
        this.bookShelf.forEach(book => {
            if (book.amount) {
                this.element.appendChild(book.element);

                book.element.addEventListener('bookchange', (e) => {
                    if (e.target.dataset.amount == 0) {
                        e.target.remove();
                    }
                })
            }
        });

    }

    createHtml() {
        this.element = document.createElement('div');
        this.element.classList.add('books');
        document.querySelector('body').appendChild(this.element);
    }

}


class Book {
    author;
    pages;
    title;
    price;
    amount;
    element;

    // static bookShelf = new Set();

    static bookChange = new Event('bookchange');

    constructor(title, pages, price, amount, ...author) {
        this.title = title;
        this.pages = pages;
        this.author = author; // masyvas gautas is rest operatoriaus
        this.price = price;
        this.amount = amount;
        this.createHtml();

        // this.constructor.bookShelf.add(this); // statinis kreipinys objektiniame kontekste
    }

    createHtml() {
        let authors = '';
        for (const author of this.author) {
            authors += `<h3>${author}</h3>`;
        }

        const html = `
        <h1>${this.title}</h1>` +
            authors +
            `<small>Puslapių sk. ${this.pages}</small>
        <i>${this.price} EUR</i>
        <b>Prekyboje: ${this.amount} vnt.</b>
        <button>Pirkti</button>
        `;
        this.element = document.createElement('div');
        this.element.innerHTML = html;
        this.addCover();
        this.element.querySelector('button').addEventListener('click', () => {
            this.amount--;
            this.element.dataset.amount = this.amount;
            this.element.querySelector('b').innerText = `Prekyboje: ${this.amount} vnt.`;
            this.element.dispatchEvent(this.constructor.bookChange);
        });

    }

    addCover() {
        this.element.classList.add('no-cover');
    }
}


class PinkBook extends Book {
    addCover() {
        this.element.classList.add('pink-cover');
    }
}

class YellowBook extends Book {
    addCover() {
        this.element.classList.add('yellow-cover');
    }
}



const book1 = new PinkBook('Penki mėnuliai', 258, 15.25, 12, 'Jonas Biliūnas');
const book12 = new Book('Penki mėnuliai', 258, 5.05, 15, 'Jonas Biliūnas');
const book2 = new YellowBook('Negirdėtos pasakos', 374, 7.23, 21, 'Ragana Piktoji', 'Ragana Žalioji');
const book3 = new Book('Didelės upės skonis', 142, 11.50, 0, 'Bebras Aštriadantis');
const book4 = new YellowBook('Drakono galvų trilogija', 890, 35.00, 4, 'Hobitas Trobitas');


// console.log(book1, book2, book3);
// console.log(Book.bookShelf);

const bs1 = new BookShelf(book1, book2, book3);
const bs2 = new BookShelf(book4, book12);
// const bs3 = new BookShelf(book4, book1);