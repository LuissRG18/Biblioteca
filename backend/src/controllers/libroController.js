import Libro from '../models/Libro.js';

/**
 * @desc    Obtener todos los libros con paginación y filtros
 * @route   GET /api/v1/libros/get/all
 * @access  Public
 */
export const getAllLibros = async (req, res) => {
  try {
    // Obtener parámetros de query
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const genero = req.query.genero;
    const disponible = req.query.disponible;
    const search = req.query.search;
    const autor = req.query.autor;

    // Calcular skip para paginación
    const skip = (page - 1) * limit;

    // Construir filtros
    const filters = {};

    if (genero) {
      filters.generos = genero.toLowerCase();
    }

    if (disponible !== undefined) {
      filters.disponible = disponible === 'true';
    }

    if (search) {
      filters.titulo = { $regex: search, $options: 'i' }; // Búsqueda insensible a mayúsculas
    }

    if (autor) {
      filters.autor = { $regex: autor, $options: 'i' };
    }

    // Obtener libros con filtros y paginación
    const libros = await Libro.find(filters)
      .sort({ createdAt: -1 }) // Ordenar por más recientes
      .skip(skip)
      .limit(limit);

    // Contar total de documentos que cumplen los filtros
    const totalItems = await Libro.countDocuments(filters);
    const totalPages = Math.ceil(totalItems / limit);

    res.status(200).json({
      success: true,
      data: libros,
      pagination: {
        currentPage: page,
        totalPages,
        totalItems,
        itemsPerPage: limit,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener libros',
      error: error.message,
    });
  }
};

/**
 * @desc    Obtener un libro por ID
 * @route   GET /api/v1/libros/get/:id
 * @access  Public
 */
export const getLibroById = async (req, res) => {
  try {
    const { id } = req.params;

    const libro = await Libro.findById(id);

    if (!libro) {
      return res.status(404).json({
        success: false,
        message: 'Libro no encontrado',
      });
    }

    res.status(200).json({
      success: true,
      data: libro,
    });
  } catch (error) {
    // Error de formato de ObjectId
    if (error.kind === 'ObjectId') {
      return res.status(400).json({
        success: false,
        message: 'ID de libro inválido',
      });
    }

    res.status(500).json({
      success: false,
      message: 'Error al obtener libro',
      error: error.message,
    });
  }
};

/**
 * @desc    Crear un nuevo libro
 * @route   POST /api/v1/libros/post
 * @access  Public
 */
export const createLibro = async (req, res) => {
  try {
    const {
      isbn,
      titulo,
      autor,
      editorial,
      anioPublicacion,
      generos,
      numeroPaginas,
      descripcion,
      idioma,
      precio,
      stock,
      disponible,
      portada
    } = req.body;

    // Validar campos requeridos
    if (!isbn || !titulo || !autor || !editorial || !anioPublicacion || !generos || !numeroPaginas || !descripcion || !precio) {
      return res.status(400).json({
        success: false,
        message: 'Todos los campos requeridos deben ser proporcionados',
      });
    }

    // Verificar si ya existe un libro con ese ISBN
    const libroExistente = await Libro.findOne({ isbn });

    if (libroExistente) {
      return res.status(409).json({
        success: false,
        message: 'Ya existe un libro con ese ISBN',
      });
    }

    // Crear nuevo libro
    const libro = await Libro.create({
      isbn,
      titulo,
      autor,
      editorial,
      anioPublicacion,
      generos,
      numeroPaginas,
      descripcion,
      idioma,
      precio,
      stock,
      disponible,
      portada,
    });

    res.status(201).json({
      success: true,
      message: 'Libro creado exitosamente',
      data: libro,
    });
  } catch (error) {
    // Errores de validación de Mongoose
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Error de validación',
        errors: messages,
      });
    }

    res.status(500).json({
      success: false,
      message: 'Error al crear libro',
      error: error.message,
    });
  }
};

/**
 * @desc    Actualizar un libro
 * @route   PATCH /api/v1/libros/update/:id
 * @access  Public
 */
export const updateLibro = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Verificar que no se actualice a un ISBN duplicado
    if (updateData.isbn) {
      const libroExistente = await Libro.findOne({
        isbn: updateData.isbn,
        _id: { $ne: id }, // Excluir el libro actual
      });

      if (libroExistente) {
        return res.status(409).json({
          success: false,
          message: 'Ya existe un libro con ese ISBN',
        });
      }
    }

    const libro = await Libro.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true, // Retornar el documento actualizado
        runValidators: true, // Ejecutar validaciones del schema
      }
    );

    if (!libro) {
      return res.status(404).json({
        success: false,
        message: 'Libro no encontrado',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Libro actualizado exitosamente',
      data: libro,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Error de validación',
        errors: messages,
      });
    }

    if (error.kind === 'ObjectId') {
      return res.status(400).json({
        success: false,
        message: 'ID de libro inválido',
      });
    }

    res.status(500).json({
      success: false,
      message: 'Error al actualizar libro',
      error: error.message,
    });
  }
};

/**
 * @desc    Eliminar libro
 * @route   DELETE /api/v1/libros/delete/:id
 * @access  Public
 */
export const deleteLibro = async (req, res) => {
  try {
    const { id } = req.params;

    const libro = await Libro.findByIdAndDelete(id);

    if (!libro) {
      return res.status(404).json({
        success: false,
        message: 'Libro no encontrado',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Libro eliminado exitosamente',
      data: libro,
    });
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(400).json({
        success: false,
        message: 'ID de libro inválido',
      });
    }

    res.status(500).json({
      success: false,
      message: 'Error al eliminar libro',
      error: error.message,
    });
  }
};

