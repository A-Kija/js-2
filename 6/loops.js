/*
AAA
B
B
B
AAA
B
B
B
AAA
B
B
B
AAA
B
B
B
*/



/*
DIDELIS START
B
B
B
DIDELIS END
DIDELIS START
B
B
B
DIDELIS END
DIDELIS START
B
B
B
DIDELIS END
DIDELIS START
B
B
B
DIDELIS END
*/



/*
DIDELIS START
B
B
B
DIDELIS END
DIDELIS START
B
B
B
B
DIDELIS END
DIDELIS START
B
B
B
B
B
DIDELIS END
DIDELIS START
B
B
B
B
B
B
DIDELIS END
*/


/*
DIDELIS START
B
B
B
DIDELIS MID
C
C
C
DIDELIS END
DIDELIS START
B
B
B
DIDELIS MID
C
C
C
DIDELIS END
DIDELIS START
B
B
B
DIDELIS MID
C
C
C
DIDELIS END
DIDELIS START
B
B
B
DIDELIS MID
C
C
C
DIDELIS END
*/


for (let i = 1; i <= 4; i++) {
    console.log('DIDELIS START');
    for (let j = 1; j <= 7; j++) {
        if (j <= 3) {
            console.log('B');
        } else if (j == 4) {
            console.log('DIDELIS MID');
        } else {
            console.log('C');
        }
    }
    console.log('DIDELIS END');
}


let A = 'A';


for (let i = 0; i < 5; i++) {
    let eilute = '';
    for (let j = 0; j < 5; j++) {
        eilute += A;
    }
    console.log(i + 1, eilute)
}

let eilute = '';
let kiekis = 1;
let pirmyn = true;
for (let i = 1; i < 10; i++) {
    for (let j = 0; j < kiekis; j++) {
        eilute += A;
    }
    eilute += ' ';
    if (i % 5 === 0) {
        pirmyn = !pirmyn;
    }
    pirmyn ? kiekis++ : kiekis--;
}
console.log(eilute);




/*
AAAAA
AAAAA
AAAAA
AAAAA
AAAAA
*/


/*
A AA AAA AAAA AAAAA AAAA AAA AA A
*/

/*
A
AA
AAA
AAAA
AAAAA
AAAAA
AAAAA
AAAAA
AAAAA
*/


/*
A
AA
AAA
AAAA
AAAAA
AAAA
AAA
AA
A
*/