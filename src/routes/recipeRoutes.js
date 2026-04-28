const express = require('express');
const router = express.Router();
const { getRecetas, getReceta, createReceta, updateReceta, deleteReceta } = require('../controllers/recipeController');
const { verifyToken } = require('../middleware/auth');

router.get('/', getRecetas);
router.get('/:id', getReceta);
router.post('/', verifyToken, createReceta);
router.put('/:id', verifyToken, updateReceta);
router.delete('/:id', verifyToken, deleteReceta);

module.exports = router;