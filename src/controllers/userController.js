const User = require('../models/User');
const bcrypt = require('bcryptjs');

const getUsuarios = async (req, res) => {
  try {
    const usuarios = await User.find().select('-password');
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUsuario = async (req, res) => {
  try {
    const usuario = await User.findById(req.params.id).select('-password');
    if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUsuario = async (req, res) => {
  try {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    const usuario = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).select('-password');
    if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUsuario = async (req, res) => {
  try {
    const usuario = await User.findByIdAndDelete(req.params.id);
    if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json({ message: 'Usuario eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUsuarios, getUsuario, updateUsuario, deleteUsuario };