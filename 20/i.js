const obj1 = {};

const obj2 = {
    // savybe1: 'zaluma',
    // savybe2: 'geltonuma',
    // savybe3: 42,
    // savybe4: [1, 5, 6],
    metodas1: function() {
        console.log('as metodas1')
    },
    metodas2: function() {
        console.log('as metodas2')
    },
    metodas3: function() {
        console.log('as metodas3')
    }
};

// console.log(obj2);

for (const savybe in obj2) {
    // console.log(savybe, obj2[savybe], typeof obj2[savybe]);
}


let o1 = {
    savybe: 'Labas',
    metodas: function() {
        console.log(this);
        return function viso() {
            console.log(this);
        }
    }
}

let o2 = o1;

o1 = 1;

// o1.metodas();


// o2.metodas();




const calc = {
    suma: function(a, b) {
        this.rezultatas = a + b;
        this.istorija.push(this.rezultatas);
        return this;
    },
    skirtumas: function(a, b) {
        this.rezultatas = a - b;
        this.istorija.push(this.rezultatas);
        return this;
    },
    clear: function() {
        this.istorija = []
    },

    clear1: () => console.log(this),
    clear2: function() { console.log(this) },

    clear3: function() {
        console.log(1, this.rezultatas);
        // const _this = this;
        return () => {
            console.log(2, this.rezultatas)
        }
    },
    rezultatas: null,
    istorija: [],
    t: this
}

calc.suma(5, 5).suma(5, 15);

// calc.clear1();
// calc.clear2();
// console.log(calc.rezultatas, calc.istorija);

calc.clear3()();


// function jonas() {
//     console.log(this);
// }

// jonas();

console.log('--------------------------------------------');

let a = 'blabla';
let b = 'kuku';


String.prototype.labas = function() {
    console.log('labas, ' + this.valueOf());
}


console.log('%c Oh my heavens! ', 'background: #ff0000; color: #ffffff; margin:200px;');

for (let i = 1; i < 10; i++) {
    this.alert('valio');
    this.confirm('valio');
}



a.labas();

b.labas();