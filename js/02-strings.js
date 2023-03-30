console.clear();

/*
STRINGS - simboliu sarasas/junginys, tekstas -> paragrafai -> sakiniu -> zodziu
*/

/*
Kintamųjų iniciavimas:
- const (default)
- let (tik jei yra poreikis keisti reiksme)
- var (nenaudoti, nebent TIKRAI zinote ka darote)
String'o iniciavimas:
- viengubos kabutes
- dvigubos kabutes
*/

// KINTAMUJU INICIAVIMAS

const vardas = 'Petras';
console.log(vardas);

const keturi = 4;
console.log(keturi);

const keturiTekstu = '4';
console.log(keturiTekstu);


let pinigine = 0;
console.log(pinigine);

pinigine = 5;
console.log(pinigine);

pinigine = 55;
console.log(pinigine);

console.log('---------------------');
// STRINGS

const firstname = 'Maryte';
console.log(firstname);

const lastname = "Marytaite";
console.log(lastname);

// Labas rytas, Maryte!
console.log('Labas rytas,', firstname, '!');    // netinkamas sprendimas

const pasisveikinimas = 'Labas rytas, ' + firstname + '!';
console.log(pasisveikinimas);

// Sveiki, mano vardas Jonas ir man 88 metai!
const name1 = 'Jonas';
const age1 = 88;

const prisistatymas = 'Sveiki, mano vardas ' + name1 + ' ir man ' + age1 + ' metai!';
console.log(prisistatymas);

const word1 = 'vasara22';

const perPuse = word1 / 2;
console.log(perPuse);

const dvygubai = word1 * 2;
console.log(dvygubai);

const skirtumas = word1 - 2;
console.log(skirtumas);


// const x = '4'; // '4' -> 4
const x = '4a'; // '4a' -> NaN
const y = 5;

console.log(y + y);
console.log(x + y);
console.log(y + x);
console.log(x + x);

console.log(y - y);
console.log(x - y);
console.log(y - x);
console.log(x - x);

console.log(y / y);
console.log(x / y);
console.log(y / x);
console.log(x / x);

console.log(y * y);
console.log(x * y);
console.log(y * x);
console.log(x * x);

// Labas rytas

const s1 = 'Labas rytas';
console.log(s1);

const s2 = 'L' + 'a' + 'b' + 'a' + 's' + ' ' + 'r' + '...';
console.log(s2);

const s3 = 'Labas' + ' ' + 'rytas';
console.log(s3);