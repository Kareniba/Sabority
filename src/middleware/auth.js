const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado, token requerido' });
  }

  try {
    const tokenSinBearer = token.startsWith('Bearer ') ? token.slice(7) : token;
    const verificado = jwt.verify(tokenSinBearer, process.env.JWT_SECRET);
    req.usuario = verificado;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token inválido' });
  }
};

module.exports = { verifyToken };