import thenFs from "then-fs";

//在async方法中,第一个await之前的代码会同步执行,await之后的代码会异步执行
async function getFile() {
    console.log('000');
    const r1 = await thenFs.readFile('./files/1.txt', 'utf8');
    const r2 = await thenFs.readFile('./files/2.txt', 'utf8');
    const r3 = await thenFs.readFile('./files/3.txt', 'utf8');
    console.log(r1,r2,r3);
    console.log('444');
}
getFile()
console.log('666');