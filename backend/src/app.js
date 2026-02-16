import express from 'express';
import cors from 'cors';
import libroRoutes from './routes/libroRoutes.js';
import { errorHandler, notFound } from './middlewares/errorHandler.js';
import { connectDB } from './config/database.js';

const app = express();

// Conectar a MongoDB
connectDB().catch(err => console.error('Error connecting to MongoDB:', err));

// Middlewares globales
// Configuración de CORS
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:4200',
      'http://localhost:5173', // Vite React dev
      'https://biblioteca-angular.vercel.app',
      'https://biblioteca-react.vercel.app',
      'https://biblioteca-api.vercel.app'
    ];

    // Permitir requests sin origin (mobile apps, Postman, etc.)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else if (process.env.NODE_ENV === 'development') {
      // En desarrollo, permitir todos
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions)); // Permitir CORS para todos los orígenes
app.use(express.json()); // Parsear JSON en body
app.use(express.urlencoded({ extended: true })); // Parsear form data

// Logging middleware (desarrollo)
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  });
}

// Ruta raíz - Redirige a /api/v1
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Biblioteca API - MEAN Stack Project',
    version: '1.0.0',
    documentationUrl: '/api/v1',
    endpoints: {
      documentation: 'GET /api/v1',
      getAllLibros: 'GET /api/v1/libros/get/all?page=1&limit=20',
      getLibroById: 'GET /api/v1/libros/get/:id',
      createLibro: 'POST /api/v1/libros/post',
      updateLibro: 'PATCH /api/v1/libros/update/:id',
      deleteLibro: 'DELETE /api/v1/libros/delete/:id',
    },
    author: 'Luis',
    description: 'API REST para gestión de biblioteca con operaciones CRUD completas',
  });
});

// Ruta raíz - Documentación de la API
app.get('/api/v1', (req, res) => {
  res.json({
    success: true,
    message: 'Biblioteca API - MEAN Stack Project',
    version: '1.0.0',
    endpoints: {
      documentation: 'GET /api/v1',
      getAllLibros: 'GET /api/v1/libros/get/all?page=1&limit=20&genero=ficción&disponible=true',
      getLibroById: 'GET /api/v1/libros/get/:id',
      createLibro: 'POST /api/v1/libros/post',
      updateLibro: 'PATCH /api/v1/libros/update/:id',
      deleteLibro: 'DELETE /api/v1/libros/delete/:id',
    },
    author: 'Luis',
    description: 'API REST para gestión de biblioteca con operaciones CRUD completas',
  });
});

// Rutas de recursos
app.use('/api/v1/libros', libroRoutes);

// Middlewares de error (deben ir al final)
app.use(notFound);
app.use(errorHandler);

export default app;

