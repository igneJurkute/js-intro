console.clear();
/*
OBJECT - objektas; galima pritempti: setas, zodynas
{key: value}
*/

const emptyObject = {};
console.log(emptyObject);

const user = {
    name: 'Petras',
    age: 99,
    isMarried: true,
    'mano pazymiai': [10, 9, 8],
};
console.log(user);

// Sveiki, as esu [vardas] ir man yra [kazkiek] metu.

const sayHi = `Sveiki, as esu ${user['name']} ir man yra ${user['age']} metu.`;
console.log(sayHi);

const sayHi2 = `Sveiki, as esu ${user.name} ir man yra ${user.age} metu.`;
console.log(sayHi2);

console.log(user.isMarried);
console.log(user['mano pazymiai']);

console.log('----------------');

const blynas = {};
console.log('Blynas:', blynas);
console.log('Dydis:', blynas.dydis);
console.log('Spalva:', blynas.spalva);

blynas.dydis = 10;
console.log('Blynas:', blynas);
console.log('Dydis:', blynas.dydis);
console.log('Spalva:', blynas.spalva);

blynas.spalva = 'red';
console.log('Blynas:', blynas);
console.log('Dydis:', blynas.dydis);
console.log('Spalva:', blynas.spalva);

console.log('-------------');

const marks = [10, 2, 8, 4, 6];
console.log('Pazymiai:', marks);
console.log('Antras:', marks[1]);

marks[1] = 5;
console.log('Pazymiai:', marks);
console.log('Antras:', marks[1]);

console.log('-------------');

let a = ['a'];
a[0] = 'aaa';
console.log(a);

a = [':('];
console.log(a);

let gg = {
    goodGame: false,
}
console.log(gg);

gg.goodGame = true;
console.log(gg);

gg = {};
console.log(gg);