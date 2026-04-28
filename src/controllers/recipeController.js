const Recipe = require('../models/Recipe');

const getRecetas = async (req, res) => {
  try {
    const recetas = await Recipe.find().populate('categoria', 'nombre').populate('autor', 'nombre email');
    res.json(recetas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getReceta = async (req, res) => {
  try {
    const receta = await Recipe.findById(req.params.id).populate('categoria', 'nombre').populate('autor', 'nombre email');
    if (!receta) return res.status(404).json({ message: 'Receta no encontrada' });
    res.json(receta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createReceta = async (req, res) => {
  try {
    const receta = new Recipe({ ...req.body, autor: req.usuario.id });
    await receta.save();
    res.status(201).json(receta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateReceta = async (req, res) => {
  try {
    const receta = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!receta) return res.status(404).json({ message: 'Receta no encontrada' });
    res.json(receta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteReceta = async (req, res) => {
  try {
    const receta = await Recipe.findByIdAndDelete(req.params.id);
    if (!receta) return res.status(404).json({ message: 'Receta no encontrada' });
    res.json({ message: 'Receta eliminada' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getRecetas, getReceta, createReceta, updateReceta, deleteReceta };