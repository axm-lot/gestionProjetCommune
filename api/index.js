// Importer les dépendances nécessaires
const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./connexion');
const cors = require('cors');

const Projet = () => {
  // Créer une instance de l'application Express
  const app = express();

  // Configurer le middleware bodyParser pour parser les requêtes JSON
  app.use(bodyParser.json());
  app.use(cors());



  // Endpoint pour créer un enregistrement dans la table Projets
  app.post('/projets', (req, res) => {
    const projet = req.body;
    connection.query('INSERT INTO Projets SET ?', projet, (err, result) => {
      if (err) {
        console.error('Erreur lors de la création du projet :', err);
        res.status(500).send('Erreur lors de la création du projet');
      } else {
        res.status(201).send('Projet créé avec succès');
      }
    });
  });

  // Endpoint pour récupérer tous les enregistrements de la table Projets
  app.get('/projets', (req, res) => {
    connection.query('SELECT * FROM Projets', (err, rows) => {
      if (err) {
        console.error('Erreur lors de la récupération des projets :', err);
        res.status(500).send('Erreur lors de la récupération des projets');
      } else {
        res.status(200).json(rows);
      }
    });
  });

  // Endpoint pour mettre à jour un enregistrement dans la table Projets
  app.put('/projets/:id', (req, res) => {
    const projetId = req.params.id;
    const updatedProjet = req.body;
    connection.query('UPDATE Projets SET ? WHERE ID_Projet = ?', [updatedProjet, projetId], (err, result) => {
      if (err) {
        console.error('Erreur lors de la mise à jour du projet :', err);
        res.status(500).send('Erreur lors de la mise à jour du projet');
      } else {
        res.status(200).send('Projet mis à jour avec succès');
      }
    });
  });

  // Endpoint pour supprimer un enregistrement de la table Projets
  app.delete('/projets/:id', (req, res) => {
    const projetId = req.params.id;
    connection.query('DELETE FROM Projets WHERE ID_Projet = ?', projetId, (err, result) => {
      if (err) {
        console.error('Erreur lors de la suppression du projet :', err);
        res.status(500).send('Erreur lors de la suppression du projet');
      } else {
        res.status(200).send('Projet supprimé avec succès');
      }
    });
  });

  // recherche
  app.get('/projets', (req, res) => {
    const { nom, date, dateDebut, dateFin, statut, budget } = req.query;

    let searchQuery = 'SELECT * FROM Projets WHERE 1=1';
    let params = [];

    if (nom) {
      searchQuery += ' AND Nom_Projet LIKE ?';
      params.push(`%${nom}%`);
    }

    if (date) {
      searchQuery += ' AND Date_Debut <= ? AND Date_Fin >= ?';
      params.push(date, date);
    }

    if (dateDebut && dateFin) {
      searchQuery += ' AND Date_Debut >= ? AND Date_Fin <= ?';
      params.push(dateDebut, dateFin);
    }

    if (statut) {
      searchQuery += ' AND Statut = ?';
      params.push(statut);
    }

    if (budget) {
      searchQuery += ' AND Budget = ?';
      params.push(budget);
    }

    connection.query(searchQuery, params, (err, rows) => {
      if (err) {
        console.error('Erreur lors de la recherche des projets :', err);
        res.status(500).send('Erreur lors de la recherche des projets');
      } else {
        res.status(200).json(rows);
      }
    });
  });

  app.get('/encours', (req, res) => {
    connection.query("SELECT * FROM Projets WHERE Statut = 'En cours'", (err, rows) => {
      if (err) {
        console.error('Erreur lors de la récupération des projets :', err);
        res.status(500).send('Erreur lors de la récupération des projets');
      } else {
        res.status(200).json(rows);
      }
    });
  })

  app.get('/suspendu', (req, res) => {
    connection.query("SELECT * FROM Projets WHERE Statut = 'Suspendu'", (err, rows) => {
      if (err) {
        console.error('Erreur lors de la récupération des projets :', err);
        res.status(500).send('Erreur lors de la récupération des projets');
      } else {
        res.status(200).json(rows);
      }
    });
  })

  app.get('/termine', (req, res) => {
    connection.query("SELECT * FROM Projets WHERE Statut = 'Termine'", (err, rows) => {
      if (err) {
        console.error('Erreur lors de la récupération des projets :', err);
        res.status(500).send('Erreur lors de la récupération des projets');
      } else {
        res.status(200).json(rows);
      }
    });
  })

  app.post('/signin', (req, res) => {
    const { nom, mdp } = req.body;
    console.log(nom + mdp)
    // Assuming your table structure has 'name' and 'password' columns
    connection.query(
      'SELECT * FROM login WHERE name = ? AND mdp = ?',
      [nom, mdp],
      (err, rows) => {
        if (err) {
          res.send("Error")
        } else {
          if (rows.length === 0) {
            res.send("Error")
          } else {
            res.send("success")
          }
        }
      }
    );
  });

  app.get('/proData', (req, res) => {
    connection.query("SELECT Statut as titre, count(Statut) as stat FROM Projets group by Statut", (err, rows) => {
      if (err) {
        console.error('Erreur lors de la récupération des projets :', err);
        res.status(500).send('Erreur lors de la récupération des projets');
      } else {
        res.status(200).json(rows);
      }
    });
  })

  return app;
};

module.exports = Projet;