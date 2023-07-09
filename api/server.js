const express = require('express');

const app = express();

const proj = require('./index');
const tache = require('./tache');
const comm = require('./comm_partPrenante');

app.use(proj());
app.use(tache());
app.use(comm());

app.listen(5555, () => {
    console.log('Serveur démarré sur le port 5555');
});