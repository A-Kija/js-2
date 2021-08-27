class BookShelf {
    bookShelf;
    element;
    constructor(...books) {
        this.bookShelf = new Set(books);
        this.createHtml();
        this.bookShelf.forEach(book => this.element.appendChild(book.element));
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
    element;

    // static bookShelf = new Set();

    constructor(title, pages, author) {
        this.title = title;
        this.pages = pages;
        this.author = author;
        this.createHtml();

        // this.constructor.bookShelf.add(this); // statinis kreipinys objektiniame kontekste
    }

    createHtml() {
        const html = `
        <h1>${this.title}</h1>
        <h3>${this.author}</h3>
        <small>${this.pages}</small>
        `;
        this.element = document.createElement('div');
        this.element.innerHTML = html;
        this.addCover();
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



const book1 = new PinkBook('Penki mėnuliai', 258, 'Jonas Biliūnas');
const book12 = new Book('Penki mėnuliai', 258, 'Jonas Biliūnas');
const book2 = new YellowBook('Negirdėtos pasakos', 374, 'Ragana Piktoji');
const book3 = new Book('Didelės upės skonis', 142, 'Bebras Aštriadantis');
const book4 = new YellowBook('Drakono galvų trilogija', 890, 'Hobitas Trobitas');


// console.log(book1, book2, book3);
// console.log(Book.bookShelf);

const bs1 = new BookShelf(book1, book2, book3);
const bs2 = new BookShelf(book4, book12);