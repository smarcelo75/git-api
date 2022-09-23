require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const portNumber = process.env.PORT;

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