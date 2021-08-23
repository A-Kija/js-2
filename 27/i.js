const line = document.querySelector('#line');

for (let l = 0; l <= 3000; l += 200) {
    const part = document.createElement('div');
    part.classList.add('part');
    const digit = document.createElement('span');
    part.appendChild(digit);
    digit.appendChild(document.createTextNode(l + 'px'));
    line.appendChild(part);
}


document.addEventListener('scroll', () => console.log(window.scrollY));