const express = require('express');
const app = express();
const morgan = require('morgan');
const portNumber = 5000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({
        ok: true,
        message: 'Hola mundo'
    });
});

app.listen(portNumber, () => {
    console.log(`app corriendo en puerto ${portNumber}`);
});