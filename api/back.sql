CREATE TABLE Projets (
  ID_Projet VARCHAR(10) PRIMARY KEY,
  Nom_Projet VARCHAR(255),
  Description TEXT,
  Date_Debut DATE,
  Date_Fin DATE,
  Statut VARCHAR(20),
  Responsable VARCHAR(255),
  Budget DECIMAL(30, 2)
);
CREATE TABLE Taches (
  ID_Tâche VARCHAR(10) PRIMARY KEY,
  ID_Projet VARCHAR(10),
  Description TEXT,
  Date_Debut DATE,
  Date_Fin DATE,
  Statut VARCHAR(20),
  Responsable VARCHAR(255),
  Priorité VARCHAR(20),
  FOREIGN KEY (ID_Projet) REFERENCES Projets(ID_Projet) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE Ressources (
  ID_Ressource VARCHAR(10) PRIMARY KEY,
  Nom_Ressource VARCHAR(255),
  Description TEXT,
  Disponibilité BOOLEAN,
  Quantité INT
);
CREATE TABLE Parties_prenantes (
  ID_PartiePrenante VARCHAR(10) PRIMARY KEY,
  Nom_PartiePrenante VARCHAR(255),
  Description TEXT,
  Contact VARCHAR(255)
);
CREATE TABLE Communication (
  ID_Communication VARCHAR(10) PRIMARY KEY,
  ID_Projet VARCHAR(10),
  Message TEXT,
  Date DATE,
  Type VARCHAR(20),
  FOREIGN KEY (ID_Projet) REFERENCES Projets(ID_Projet) ON DELETE CASCADE ON UPDATE CASCADE
);
