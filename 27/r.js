function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function go() {
    ball.style.top = rand(0, h) + 'px';
    ball.style.left = rand(0, w) + 'px';
}

let w = window.innerWidth - 200;
let h = window.innerHeight - 200;

window.addEventListener('resize', () => {
    w = window.innerWidth - 200;
    h = window.innerHeight - 200;
});


// const ball = document.querySelector('.ball');

let intervalID;
let isGo = false

// ball.addEventListener('click', () => {
//     if (isGo) {
//         clearTimeout(intervalID);
//         isGo = false;
//     } else {
//         go();
//         intervalID = setInterval(go, 3000);
//         isGo = true;
//     }


// });

class Burbulai {

    static burbulai;
    static w;
    static h;
    static startButton = document.querySelector('button#start');
    static nameInput = document.querySelector('input#gamer');
    static timerDiv = document.querySelector('.timer');
    static tableUl = document.querySelector('ul');
    static timeStart;
    static clockId;
    static gamer;
    static table;

    static start() {

        this.ekranoDydis();
        this.burbulai = new Map();
        this.load();
        this.displayTable();

        this.startButton.addEventListener('click', e => {
            e.stopPropagation();
            for (let i = 1; i <= 1; i++) {
                setTimeout(this.naujasBurbulas, this.rand(1, 2000));
            }
            document.querySelector('body').addEventListener('click', this.naujasBurbulas);
            this.startButton.style.display = 'none';
            this.nameInput.style.display = 'none';

            this.gamer = this.nameInput.value;
            this.timeStart = new Date();
            this.clockId = setInterval(this.doTick, 100);
        });
    }


    static doTick = () => {
        const tic = new Date();
        const time = tic.getTime() - this.timeStart.getTime();
        const sec = Math.floor(time / 1000);
        const sec1 = Math.floor((time - (sec * 1000)) / 100);
        this.timerDiv.innerText = sec + ':' + sec1;
    }

    static naujasBurbulas = () => {
        const b = new Burbulai();
        this.burbulai.set(b.id, b);
    }

    static ekranoDydis() {
        this.w = window.innerWidth - 200;
        this.h = window.innerHeight - 200;
    }

    static rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static pagautas(b) {
        document.querySelector('body').removeChild(b.element); // trynimas iš htmlo
        this.burbulai.delete(b.id); // trynimas iš mapo
        clearTimeout(this.timerId);
        if (this.burbulai.size === 0) {
            this.gameEnd();
        }
    }

    static gameEnd() {
        const tic = new Date();
        const time = tic.getTime() - this.timeStart.getTime();
        const sec = Math.floor(time / 1000);
        const sec1 = Math.floor((time - (sec * 1000)) / 10);
        this.timerDiv.innerText = sec + ':' + sec1;
        this.startButton.style.display = 'inline-block';
        this.nameInput.style.display = 'inline-block';
        document.querySelector('body').removeEventListener('click', this.naujasBurbulas);
        clearTimeout(this.clockId);
        this.table.push({ name: this.gamer, score: sec + ':' + sec1, time: time });
        this.table.sort((a, b) => a.time - b.time);
        localStorage.setItem('ballApp', JSON.stringify(this.table.slice(0, 5)));
        this.table = this.table.slice(0, 5);
        this.displayTable();
    }

    static load() {
        if (null === localStorage.getItem('ballApp')) {
            localStorage.setItem('ballApp', JSON.stringify([]));
        }
        this.table = JSON.parse(localStorage.getItem('ballApp'));
    }

    static displayTable() {
        let html = '';
        this.table.forEach(g => {
            html += `<li><b>${g.name}</b> ${g.score}</li>`;
        })
        this.tableUl.innerHTML = html;
    }

    constructor() {
        this.id = Math.floor(Math.random() * 9000000) + 1000000;
        this.element = document.createElement('div');
        this.element.classList.add('ball');
        this.element.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        this.varyk();
        setTimeout(this.varyk, 30);
        this.element.addEventListener('click', e => {
            e.stopPropagation();
            this.constructor.pagautas(this);
        })
        document.querySelector('body').appendChild(this.element);
        this.timerId = setInterval(this.varyk, 3000);

    }

    varyk = () => {
        this.element.style.top = this.constructor.rand(0, this.constructor.h) + 'px';
        this.element.style.left = this.constructor.rand(0, this.constructor.w) + 'px';
    }

}



Burbulai.start();

// clearTimeout(intervalID)