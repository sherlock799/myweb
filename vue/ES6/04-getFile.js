import thenFs from "then-fs";
import fs from "fs";

function getFile(fpath) {
    return new Promise(function (resolve,reject) {
        fs.readFile(fpath, 'utf-8',  (err, data)=> {
            if (err) return reject(err)
            resolve(data)
        })
    })
}

getFile('./files/11.txt')
    .then((r1)=>{console.log(r1)})
    .catch(err=>{console.log(err.message)})
