const ats = {};

document.querySelectorAll('ul').forEach(ul => ats[ul.id] = ul.querySelectorAll('.new').length);

console.log(ats);