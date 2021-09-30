const fs = require('fs')

fs.createReadStream('./assets/fantasma.jpg')
  .pipe(fs.createWriteStream('./assets/fantasma-stream.jpg'))
  .on('finish', () => console.log('Imagem foi escrita com sucesso'))
