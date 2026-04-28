const express = require('express');
const router = express.Router();
const { getFavoritos, addFavorito, deleteFavorito } = require('../controllers/favoriteController');
const { verifyToken } = require('../middleware/auth');

router.get('/', verifyToken, getFavoritos);
router.post('/', verifyToken, addFavorito);
router.delete('/:id', verifyToken, deleteFavorito);

module.exports = router;