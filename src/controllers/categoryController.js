const getCategoria = async (req, res) => {
  try {
    const categoria = await Category.findById(req.params.id);
    if (!categoria) return res.status(404).json({ message: 'Categoría no encontrada' });
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCategoria = async (req, res) => {
  try {
    const categoria = new Category(req.body);
    await categoria.save();
    res.status(201).json(categoria);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCategoria = async (req, res) => {
  try {
    const categoria = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!categoria) return res.status(404).json({ message: 'Categoría no encontrada' });
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCategoria = async (req, res) => {
  try {
    const categoria = await Category.findByIdAndDelete(req.params.id);
    if (!categoria) return res.status(404).json({ message: 'Categoría no encontrada' });
    res.json({ message: 'Categoría eliminada' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { getCategorias, getCategoria, createCategoria, updateCategoria, deleteCategoria };