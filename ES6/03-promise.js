import thenFs from "then-fs"

thenFs.readFile('./files/1.txt', 'utf-8')
    .catch(err => {
    console.log(err.message);
    })
    .then((data) => {
        console.log(data)
        return thenFs.readFile('./files/2.txt', 'utf-8')
    })
    .then((data) => {
        console.log(data)
        return thenFs.readFile('./files/3.txt', 'utf-8')
    })
    .then((data) => {
        console.log(data)
    })

const promiseAll = [
    thenFs.readFile('./files/1.txt', 'utf-8'),
    thenFs.readFile('./files/2.txt', 'utf-8'),
    thenFs.readFile('./files/3.txt', 'utf-8'),
]
    
    Promise.all(promiseAll)
        .then(([r1,r2,r3]) => {
            console.log(r1,r2,r3);
        })
        .catch(err => {
            console.log(err.message);
        })

    Promise.race(promiseAll)
        .then((result) => {
            console.log(result)
        })
        .catch(err => {
            console.log(err.message);
        })