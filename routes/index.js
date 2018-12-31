const express = require('express');
const router = express.Router();

const payload = {
  title: "Reto 1 - Curso Express Platzi",
  name: "Ivan",
  lastName: "Guerra",
  age: 24,
  nationality: '🇦🇷'
};

router.get('/', (req, res, next) => {
  res.status(200).send(payload);
});

module.exports = router;