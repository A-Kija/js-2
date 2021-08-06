const ats = {};

document.querySelectorAll('ul').forEach(ul => ats[ul.id] = ul.querySelectorAll('.new').length);

console.log(ats);


//5d

const html = `
<legend>HEADER 3</legend>
<button id="h1-line">Pabraukti H1 tagą</button>
<button id="h1-line-off">Nepabraukti H1 tagą</button>
`;

const f = document.createElement("fieldset");

const cont = document.querySelector("#contacts");
const body = document.querySelector("body");

body.insertBefore(f, cont);

f.innerHTML = html;