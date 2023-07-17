const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./connexion');

const app = express();
app.use(bodyParser.json());

app.get('/signin', (req, res) => {
    const { nom, mdp } = req.body;

    // Assuming your table structure has 'name' and 'password' columns
    connection.query(
        'SELECT * FROM login WHERE name = ? AND mdp = ?',
        [nom, mdp],
        (err, rows) => {
            if (err) {
                console.error('Erreur lors de la récupération de login :', err);
                res.status(500).send('Erreur lors de la récupération de login');
            } else {
                if (rows.length === 0) {
                    res.status(401).send('Nom d\'utilisateur ou mot de passe incorrect');
                } else {
                    res.status(200).send('Authentification réussie');
                }
            }
        }
    );
});

module.exports = app;
