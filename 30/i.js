function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('------------1-------------');
const mas1 = [];
for (let i = 0; i < 11; i++) {
    mas1.push(rand(3, 7));
}
console.log(mas1.slice());

console.log('------------2-------------');

mas1.sort((a, b) => {
    return b - a;
});
console.log(mas1.slice());

console.log('------------3-------------');

const set1 = new Set();
let counter = 0;
while (set1.size < 11) {
    counter++;
    set1.add(rand(3, 17));
}
console.log(set1, counter);

console.log('------------4-------------');

let counter1 = 0;
while (set1.size < 15) {
    counter1++;
    set1.add(rand(3, 17));
}
console.log(set1, counter1);

console.log('------------5-------------');

set1.forEach(i => {
    if (i % 3 === 0) {
        set1.delete(i);
    }
});
console.log(set1);

console.log('------------6-------------');

const mas6 = [...set1].sort((a, b) => a - b);
set1.clear();
mas6.forEach(e => set1.add(e));

console.log(set1);

console.log('------------7-------------');

mas1.sort((a, b) => a % 2 - b % 2);
console.log(mas1.slice());


mas1.sort((a) => {
    if (a % 2 === 0) {
        return -1; // keliam i virsu
    }
    return 1; // leidziam zemyn
});

console.log(mas1.slice());

console.log('------------8-------------');
map1 = new Map();
['Zuikis', 'Kiškis', 'Triušis', 'Rabitas'].forEach(z => map1.set(z, rand(5, 25)));

console.log(map1);

console.log('------------9-------------');

const mas9 = [...map1].sort((a, b) => {
    if (a[0] < b[0]) {
        return -1;
    }
    if (a[0] > b[0]) {
        return 1;
    }
    return 0;
});

console.log(mas9.slice());
console.log(new Map(mas9));

map1.clear();
mas9.forEach(v => map1.set(v[0], v[1]));

console.log('------------10-------------');

const mas10 = [...map1].sort((a, b) => a[1] - b[1]);
console.log(mas10.slice());