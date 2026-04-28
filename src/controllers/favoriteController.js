const Favorite = require('../models/Favorite');

const getFavoritos = async (req, res) => {
  try {
    const favoritos = await Favorite.find({ usuario: req.usuario.id })
      .populate('receta', 'titulo descripcion imagen');
    res.json(favoritos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addFavorito = async (req, res) => {
  try {
    const { recetaId } = req.body;

    const existe = await Favorite.findOne({ usuario: req.usuario.id, receta: recetaId });
    if (existe) return res.status(400).json({ message: 'La receta ya está en favoritos' });

    const favorito = new Favorite({ usuario: req.usuario.id, receta: recetaId });
    await favorito.save();
    res.status(201).json(favorito);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFavorito = async (req, res) => {
  try {
    const favorito = await Favorite.findByIdAndDelete(req.params.id);
    if (!favorito) return res.status(404).json({ message: 'Favorito no encontrado' });
    res.json({ message: 'Favorito eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getFavoritos, addFavorito, deleteFavorito };