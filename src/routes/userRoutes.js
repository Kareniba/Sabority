const express = require('express');
const router = express.Router();
const { getUsuarios, getUsuario, updateUsuario, deleteUsuario } = require('../controllers/userController');
const { verifyToken } = require('../middleware/auth');

router.get('/', verifyToken, getUsuarios);
router.get('/:id', verifyToken, getUsuario);
router.put('/:id', verifyToken, updateUsuario);
router.delete('/:id', verifyToken, deleteUsuario);

module.exports = router;