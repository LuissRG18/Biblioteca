import express from 'express';
import {
  getAllLibros,
  getLibroById,
  createLibro,
  updateLibro,
  deleteLibro,
} from '../controllers/libroController.js';

const router = express.Router();

// Rutas CRUD para libros
router.get('/get/all', getAllLibros);
router.get('/get/:id', getLibroById);
router.post('/post', createLibro);
router.patch('/update/:id', updateLibro);
router.delete('/delete/:id', deleteLibro);

export default router;

