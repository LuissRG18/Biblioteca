import mongoose from 'mongoose';

/**
 * Conexión a MongoDB usando Mongoose
 */
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`✅ MongoDB conectado: ${conn.connection.host}`);
    console.log(`📚 Base de datos: ${conn.connection.name}`);
  } catch (error) {
    console.error(`❌ Error de conexión MongoDB: ${error.message}`);
    process.exit(1); // Salir con error
  }
};

// Eventos de conexión
mongoose.connection.on('connected', () => {
  console.log('🔗 Mongoose conectado a MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ Error de Mongoose:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('🔌 Mongoose desconectado de MongoDB');
});

