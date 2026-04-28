const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    required: true
  },
  ingredientes: {
    type: [String],
    required: true
  },
  instrucciones: {
    type: String,
    required: true
  },
  tiempoPreparacion: {
    type: Number,
    required: true
  },
  categoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  imagen: {
    type: String,
    default: ''
  }
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);