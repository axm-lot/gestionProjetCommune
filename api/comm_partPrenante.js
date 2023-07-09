const connection = require('./connexion');
const express = require('express');
const bodyParser = require('body-parser');

const CommunicaPP = () => {
    const app = express();

    app.use(bodyParser.json());

    app.post('/addPartP', (req, res) => {
        const partP = req.body;
        connection.query('INSERT INTO Parties_prenantes SET ?', partP, (err, result) => {
        if (err) {
            console.error('Erreur lors de la création de la Partie prenante :', err);
            res.status(500).send('Erreur lors de la création de la Partie prenante');
        } else {
            res.status(201).send('Partie prenante créée avec succès');
        }
        });
    });

    app.get('/getPartP', (req, res) => {
        connection.query('SELECT * FROM Parties_prenantes', (err, rows) => {
            if (err) {
                console.error('Erreur lors de la récupération des Partie prenante :', err);
                res.status(500).send('Erreur lors de la récupération des Partie prenante');
            } else {
                res.status(200).send(rows);
            }
        });
    });

    app.put('/putPartP/:id_partP', (req, res) => {
        const partPId = req.params.id_partP;
        const updatedPartP = req.body;
        connection.query('UPDATE Parties_prenantes SET ? WHERE ID_PartiePrenante = ?', [updatedPartP, partPId], (err, result) => {
            if (err) {
                console.error('Erreur lors de la mise à jour de la Partie prenante :', err);
                res.status(500).send('Erreur lors de la mise à jour de la Partie prenante');
            } else {
                res.status(200).send('Partie prenante mis à jour avec succès');
            }
        });
    });

    app.delete('/delPartP/:id_partP', (req, res) => {
        const partPId = req.params.id_partP;
        connection.query('DELETE FROM Parties_prenantes WHERE ID_PartiePrenante = ?', partPId, (err, result) => {
            if (err) {
                console.error('Erreur lors de suppression de la Partie prenante :', err);
                res.status(500).send('Erreur lors de la suppression de la Partie prenante');
            } else {
                res.status(200).send('Partie prenante supprimée avec succès');
            }
        });
    });

    app.post('/addComm', (req, res) => {
        const comm = req.body;
        connection.query('INSERT INTO Communication SET ?', comm, (err, result) => {
        if (err) {
            console.error('Erreur lors de la création de la Communication :', err);
            res.status(500).send('Erreur lors de la création de la Communication');
        } else {
            res.status(201).send('Communication créée avec succès');
        }
        });
    });

    app.get('/getCommunication', (req, res) => {
        connection.query('SELECT * FROM Communication', (err, rows) => {
            if (err) {
                console.error('Erreur lors de la récupération des Communication :', err);
                res.status(500).send('Erreur lors de la récupération des Communication');
            } else {
                res.status(200).send(rows);
            }
        });
    });

    app.put('/putCommunication/:id_comm', (req, res) => {
        const commId = req.params.id_comm;
        const updatedComm = req.body;
        connection.query('UPDATE Communication SET ? WHERE ID_Communication = ?', [updatedComm, commId], (err, result) => {
            if (err) {
                console.error('Erreur lors de la mise à jour de la Communication :', err);
                res.status(500).send('Erreur lors de la mise à jour de la Communication');
            } else {
                res.status(200).send('Communication mis à jour avec succès');
            }
        });
    });

    app.delete('/delCommunication/:id_comm', (req, res) => {
        const commId = req.params.id_comm;
        connection.query('DELETE FROM Communication WHERE ID_Communication = ?', commId, (err, result) => {
            if (err) {
                console.error('Erreur lors de suppression de la Communication :', err);
                res.status(500).send('Erreur lors de la suppression de la Communication');
            } else {
                res.status(200).send('Communication supprimé avec succès');
            }
        });
    });

    return app;
}

module.exports = CommunicaPP;
