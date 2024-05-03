const express = require('express');
const crypto = require('crypto');
const app = express();
const port = 3000;

app.use(express.static('public'));

// Procedimiento para calcular el hash RIPEMD-160 ingresado por el usuario
app.get('/calculate-hash', (req, res) => {
    const input = req.query.input;
    const hash = crypto.createHash('ripemd160').update(input, 'utf8').digest('hex');
    res.send(hash);
});

// Inicia el servidor en el puerto especificado
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});