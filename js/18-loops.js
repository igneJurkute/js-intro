console.clear();

// FOR (ciklu tevas)
console.log('>>> FOR:');
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log('-----');
for (let i = 0; i < 5; i += 2) {
    console.log(i);
}

console.log('-----');
for (let i = 0, j = 20; i < 10 && j > 0; i++, j -= 3) {
    console.log(i, j);
}

console.log('-----');
for (let i = 0; i < 5;) {
    console.log(i);
    i += 2;
}

console.log('-----');
let i = 0;
for (; i < 5;) {
    console.log(i);
    i++;
}

console.log('-----');
function arTesti(iteratorCount) {
    return iteratorCount < 5;
}

for (let i = 0; arTesti(i); i++) {
    console.log(i);
}

console.log('-----');
for (let i = 0; (n => n < 5)(i); i++) {
    console.log(i);
}

console.log('----- a)');
let a = 0;
for (; a < 5; a++) {
    console.log('>>', a);
}
console.log(a);

for (; a < 10; a++) {
    console.log('>>', a);
}
console.log(a);

console.clear();

const marks = [10, 2, 8, 4, 6];

// FOR
let forSum = 0;
for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];
    forSum += mark;
}
console.log('for:', forSum);

// FOR-OF
let forOfSum = 0;
for (const mark of marks) {
    forOfSum += mark;
}
console.log('for-of:', forOfSum);

// WHILE
let whileSum = 0;
let iWhile = 0;
while (iWhile < marks.length) {
    const mark = marks[iWhile];
    whileSum += mark;
    iWhile++;
}
console.log('while:', whileSum);

// DO-WHILE
let doWhileSum = 0;
let iDoWhile = 0;
do {
    const mark = marks[iDoWhile];
    doWhileSum += mark;
    iDoWhile++;
} while (iDoWhile < marks.length);
console.log('do-while:', doWhileSum);

// FOREACH
let forEachSum = 0;
marks.forEach((mark) => {
    forEachSum += mark;
});
console.log('foreach:', forEachSum);

// MAP - grazina analogiska masyva
const marks2x = [];
for (const mark of marks) {
    marks2x.push(mark * 2);
}
console.log(marks);
console.log(marks2x);

const marks2xMap = marks.map(m => m * 2);
console.log(marks2xMap);

// FILTER - palieka tik tai ko nori
const studentMarks = [10, 2, -7, 8, -5, 4, 6];
const filteredMarks = studentMarks.filter(m => m >= 1 && m <= 10);
console.log(studentMarks);
console.log(filteredMarks);