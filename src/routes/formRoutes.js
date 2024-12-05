const express = require('express');
const router = express.Router();
const db = require('../db/database.js'); 


router.post('/submit', async (req, res) => {
  const { name, phone, adultNames } = req.body;

  console.log('Recebido:', { name, phone, adultNames });

  try {
    await db('FormData').insert({
      name,
      phone,
      adult_count: adultNames
    });
    res.status(200).json({ message: 'Dados recebidos com sucesso!' });
  } catch (error) {
    console.error('Erro ao inserir dados:', error);
    res.status(500).json({ error: 'Erro ao inserir dados' });
  }
});

module.exports = router;
