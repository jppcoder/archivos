const fs = require('fs');

  class Contenedor {
      constructor(productos) {

      
    async function escribir(texto) {

              try {
                  await fs.promises.writeFile('/Users/juanpablopagotto/backend/segundo/prueba.txt', `${texto}`);
                  console.log('guardado');

              } catch (error) {
                  console.log('no pude guardarlo');
              }
          }
    }
}
