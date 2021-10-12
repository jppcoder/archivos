   
const fs = require('fs');

//let texto = ("probando");

let objtest  = {
    siteName: "W3Docs",
    bookName: "Javascript",
    booksCount: 5
}

let objprueba = ("");

function makeJson(objtest, objprueba) {  
    objprueba = JSON.stringify(objtest);
    return objprueba
}

const count = [0];

async function save(objtest, count) {

    try {
        
        await fs.promises.writeFile('texto.txt', JSON.stringify(objtest));
        await fs.promises.writeFile('contador.txt',  "numero 1");
        console.log('guardado');

    } catch (error) {
        console.log('no pude guardarlo');
    }
}

save(objtest)


/*async function escribir(texto) {

    try {
        await fs.promises.writeFile('texto.txt', `${texto}`);
        console.log('guardado');

    } catch (error) {
        console.log('no pude guardarlo');
    }
}
*/
