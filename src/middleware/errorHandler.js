const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err.name === 'ValidationError') {
    return res.status(400).json({ message: err.message });
  }

  if (err.name === 'CastError') {
    return res.status(400).json({ message: 'ID inválido' });
  }

  if (err.code === 11000) {
    return res.status(400).json({ message: 'El registro ya existe' });
  }

  res.status(500).json({ message: 'Error interno del servidor' });
};

module.exports = { errorHandler };