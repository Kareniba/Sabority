const express = require('express');
const router = express.Router();
const { getCategorias, getCategoria, createCategoria, updateCategoria, deleteCategoria } = require('../controllers/categoryController');
const { verifyToken } = require('../middleware/auth');

router.get('/', getCategorias);
router.get('/:id', getCategoria);
router.post('/', verifyToken, createCategoria);
router.put('/:id', verifyToken, updateCategoria);
router.delete('/:id', verifyToken, deleteCategoria);

module.exports = router;