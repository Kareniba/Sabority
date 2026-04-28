# 🍽️ Sabority API

API REST para la plataforma de recetas Sabority, desarrollada con Express y MongoDB.

## 👥 Equipo — ByteChef

| Usuario GitHub | Integrante |
|---|---|
| @Kareniba| Karen Daniela Ibañez |

## 🚀 Tecnologías
- Node.js + Express
- MongoDB + Mongoose
- JWT (autenticación)
- bcrypt (cifrado de contraseñas)

## 📦 Módulos y Endpoints

### Auth
- POST /api/auth/register — Registro de usuario
- POST /api/auth/login — Login y obtención de token

### Usuarios
- GET /api/usuarios — Obtener todos los usuarios
- GET /api/usuarios/:id — Obtener usuario por ID
- PUT /api/usuarios/:id — Actualizar usuario
- DELETE /api/usuarios/:id — Eliminar usuario

### Recetas
- GET /api/recetas — Obtener todas las recetas
- GET /api/recetas/:id — Obtener receta por ID
- POST /api/recetas — Crear receta
- PUT /api/recetas/:id — Actualizar receta
- DELETE /api/recetas/:id — Eliminar receta

### Categorías
- GET /api/categorias — Obtener todas las categorías
- GET /api/categorias/:id — Obtener categoría por ID
- POST /api/categorias — Crear categoría
- PUT /api/categorias/:id — Actualizar categoría
- DELETE /api/categorias/:id — Eliminar categoría

### Favoritos
- GET /api/favoritos — Obtener favoritos del usuario
- POST /api/favoritos — Agregar a favoritos
- DELETE /api/favoritos/:id — Eliminar de favoritos

## ⚙️ Instalación
```bash
npm install
cp .env.example .env
npm run dev
## 📅 Última actualización: Abril 2026