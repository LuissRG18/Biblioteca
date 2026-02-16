import dotenv from 'dotenv';
import app from './src/app.js';
import { connectDB } from './src/config/database.js';

dotenv.config();
const PORT = process.env.PORT || 3000;

// Variable para rastrear si MongoDB ya está conectado
let dbConnected = false;

const startServer = async () => {
  try {
    if (!dbConnected) {
      await connectDB();
      dbConnected = true;
    }
    app.listen(PORT, () => {
      console.log(`\n🚀 Servidor corriendo en puerto ${PORT}`);
      console.log(`📍 http://localhost:${PORT}/api/v1\n`);
    });
  } catch (error) {
    console.error('❌ Error al iniciar el servidor:', error.message);
    process.exit(1);
  }
};

// Para desarrollo local
if (process.env.NODE_ENV !== 'production') {
  startServer();
}

// Exportar para Vercel serverless
export default app;

