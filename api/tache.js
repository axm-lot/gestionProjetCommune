const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./connexion');

const crudTache = () => {
    const app = express();

    app.use(bodyParser.json());

    app.post('/addTache', (req, res) => {
        const tache = req.body;
        connection.query('INSERT INTO Taches SET ?', tache, (err, result) => {
        if (err) {
            console.error('Erreur lors de la création de la tâche :', err);
            res.status(500).send('Erreur lors de la création de la tâche');
        } else {
            res.status(201).send('Tâche créée avec succès');
        }
        });
    });

    app.get('/getTache', (req, res) => {
        connection.query('SELECT * FROM Taches', (err, rows) => {
            if (err) {
                console.error('Erreur lors de la récupération des tâches :', err);
                res.status(500).send('Erreur lors de la récupération des tâches');
            } else {
                res.status(200).send(rows);
            }
        });
    });

    app.put('/putTache/:id_tache', (req, res) => {
        const tacheId = req.params.id_tache;
        const updatedTache = req.body;
        connection.query('UPDATE Taches SET ? WHERE ID_Tâche = ?', [updatedTache, tacheId], (err, result) => {
            if (err) {
                console.error('Erreur lors de la mise à jour de la tâche :', err);
                res.status(500).send('Erreur lors de la mise à jour de la tâche');
            } else {
                res.status(200).send('Tâche mis à jour avec succès');
            }
        });
    });

    app.delete('/delTache/:id_tache', (req, res) => {
        const tacheId = req.params.id_tache;
        connection.query('DELETE FROM Taches WHERE ID_Tâche = ?', tacheId, (err, result) => {
            if (err) {
                console.error('Erreur lors de suppression de la tâche :', err);
                res.status(500).send('Erreur lors de la suppression de la tâche');
            } else {
                res.status(200).send('Tâche supprimé avec succès');
            }
        });
    });

    app.post('/addRessource', (req, res) => {
        const rsrc = req.body;
        connection.query('INSERT INTO Ressources SET ?', rsrc, (err, result) => {
        if (err) {
            console.error('Erreur lors de la création de la Ressources :', err);
            res.status(500).send('Erreur lors de la création de la Ressources');
        } else {
            res.status(201).send('Ressources créée avec succès');
        }
        });
    });

    app.get('/getRessource', (req, res) => {
        connection.query('SELECT * FROM Ressources', (err, rows) => {
            if (err) {
                console.error('Erreur lors de la récupération des Ressources :', err);
                res.status(500).send('Erreur lors de la récupération des Ressources');
            } else {
                res.status(200).send(rows);
            }
        });
    });

    app.put('/putRessource/:id_rsrc', (req, res) => {
        const rsrcId = req.params.id_rsrc;
        const updatedRscr = req.body;
        connection.query('UPDATE Taches SET ? WHERE ID_Ressource = ?', [updatedRscr, rsrcId], (err, result) => {
            if (err) {
                console.error('Erreur lors de la mise à jour de la Ressources :', err);
                res.status(500).send('Erreur lors de la mise à jour de la Ressources');
            } else {
                res.status(200).send('Ressources mis à jour avec succès');
            }
        });
    });

    app.delete('/delRessource/:id_rsrc', (req, res) => {
        const rsrcId = req.params.id_rsrc;
        connection.query('DELETE FROM Ressources WHERE ID_Ressource = ?', rsrcId, (err, result) => {
            if (err) {
                console.error('Erreur lors de suppression de la Ressources :', err);
                res.status(500).send('Erreur lors de la suppression de la Ressources');
            } else {
                res.status(200).send('Ressources supprimé avec succès');
            }
        });
    });

    return app;
};

module.exports = crudTache;