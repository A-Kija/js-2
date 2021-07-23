function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
Sąlygos:
5 == 5  ==> true
5 > 5   ==> false
5 < 5   ==> false
5 >= 5  ==> true
6 >= 5  ==> true
5 <= 5  ==> true
6 <= 5  ==> false
5 != 5  ==> false





*/




let paspaustoMygtukoNumeris = rand(1, 3);

console.log(paspaustoMygtukoNumeris);

// if (paspaustoMygtukoNumeris == 1) {
//     console.log('Į krepšelį įdedam pomidorą');
// }

// if (paspaustoMygtukoNumeris == 3) {
//     console.log('Į krepšelį įdedam kriaušę');
// }

// if (paspaustoMygtukoNumeris == 2) {
//     console.log('Į krepšelį įdedam agrastus');
// }


if (paspaustoMygtukoNumeris == 1) {
    console.log('Į krepšelį įdedam pomidorą');
} else if (paspaustoMygtukoNumeris == 3) {
    console.log('Į krepšelį įdedam kriaušę');
} else {
    console.log('Į krepšelį įdedam agrastus');
}



let uzlenktuPirstu = 0;
let kiekPrabegsAsilu = rand(1, 30);

for (let cikluSkaiciuoklis = 0; cikluSkaiciuoklis < kiekPrabegsAsilu; cikluSkaiciuoklis++) {

    if (rand(1, 5) >= 2) { // Ar asilas yra didelis X 20 kg
        console.log('Prabėgo asilas');
        uzlenktuPirstu++;
    }

} // FOR PABAIGA


console.log('Teta, prabėgo ', uzlenktuPirstu, 'dideli asilai');
console.log('Viso asilų, buvo: ', kiekPrabegsAsilu);


let kiekIpiltaSriubos = rand(280, 300); // kiekis ml
let saukstuSkaitiklis = 0;

do {

    let saukstuPasemta = rand(15, 19); //kiekis ml

    if (saukstuPasemta > kiekIpiltaSriubos) { // neleidžiam pasemti daugiau nei yra likę
        saukstuPasemta = kiekIpiltaSriubos;
    }

    kiekIpiltaSriubos = kiekIpiltaSriubos - saukstuPasemta;

    saukstuSkaitiklis++;


} while (kiekIpiltaSriubos > 0);


console.log('Viso šaukštų buvo: ', saukstuSkaitiklis);
console.log('Sriubos liko: ', kiekIpiltaSriubos);


let steikas = rand(350, 450); // kiekis gramais
let sakuciuSkaitiklis = 0;
let kramtymuSkaitiklis = 0;

do {

    let atpjautaSteiko = rand(10, 30); //kiekis gramais
    // neatpjaunam daugiau nei yra
    if (atpjautaSteiko > steikas) {
        atpjautaSteiko = steikas;
    }

    steikas = steikas - atpjautaSteiko;
    sakuciuSkaitiklis++;


    do {
        let kiekVienuKrimstelejimuSuvalgomAtpjautoSteiko = rand(1, 7);
        // nekrimstelim daugiau nei yra
        if (kiekVienuKrimstelejimuSuvalgomAtpjautoSteiko > atpjautaSteiko) {
            kiekVienuKrimstelejimuSuvalgomAtpjautoSteiko = atpjautaSteiko;
        }

        atpjautaSteiko = atpjautaSteiko - kiekVienuKrimstelejimuSuvalgomAtpjautoSteiko;
        kramtymuSkaitiklis++;

    } while (atpjautaSteiko > 0);

    console.log('Liko atpjauto steiko: ', atpjautaSteiko);


} while (steikas > 0);

console.log('Viso tiek kartų dirbta su šakute: ', sakuciuSkaitiklis);
console.log('Viso tiek kramtyta: ', kramtymuSkaitiklis);
console.log('Liko steiko: ', steikas);