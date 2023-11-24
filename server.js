// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bienvenue sur le Projet Devops!');
});

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});

module.exports = app; // Pour permettre le testing
