import thenFs from "then-fs";

console.log('a');

thenFs.readFile('./files/1.txt', 'utf-8')
.then(data=>{console.log('b');})

setTimeout(() => {
    console.log('c');
}, 0);

console.log('d');