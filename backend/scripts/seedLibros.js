import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Libro from '../src/models/Libro.js';

// Cargar variables de entorno
dotenv.config();

// Datos de 25 libros para poblar la base de datos
const librosData = [
  {
    isbn: '9788408043640',
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    editorial: 'Editorial Sudamericana',
    anioPublicacion: 1967,
    generos: ['ficción', 'novela'],
    numeroPaginas: 471,
    descripcion: 'La obra maestra del realismo mágico que narra la historia de la familia Buendía a lo largo de varias generaciones en el pueblo ficticio de Macondo.',
    idioma: 'español',
    precio: 25.99,
    stock: 15,
    portada: 'https://images-na.ssl-images-amazon.com/images/I/91TvVQS7loL.jpg',
    disponible: true
  },
  {
    isbn: '9788420412146',
    titulo: 'Don Quijote de la Mancha',
    autor: 'Miguel de Cervantes',
    editorial: 'Alfaguara',
    anioPublicacion: 1605,
    generos: ['ficción', 'novela'],
    numeroPaginas: 863,
    descripcion: 'La novela más importante de la literatura española que narra las aventuras del ingenioso hidalgo Don Quijote y su escudero Sancho Panza.',
    idioma: 'español',
    precio: 32.50,
    stock: 8,
    portada: 'https://images-na.ssl-images-amazon.com/images/I/81ILbi8N8mL.jpg',
    disponible: true
  },
  {
    isbn: '9788478884452',
    titulo: '1984',
    autor: 'George Orwell',
    editorial: 'Debolsillo',
    anioPublicacion: 1949,
    generos: ['ficción', 'ciencia ficción'],
    numeroPaginas: 352,
    descripcion: 'Una distopía sobre un futuro totalitario donde el Gran Hermano vigila cada aspecto de la vida de los ciudadanos.',
    idioma: 'español',
    precio: 18.90,
    stock: 20,
    portada: 'https://images-na.ssl-images-amazon.com/images/I/71rpa1-kyvL.jpg',
    disponible: true
  },
  {
    isbn: '9788499089515',
    titulo: 'El principito',
    autor: 'Antoine de Saint-Exupéry',
    editorial: 'Salamandra',
    anioPublicacion: 1943,
    generos: ['ficción', 'aventura'],
    numeroPaginas: 96,
    descripcion: 'Un piloto varado en el desierto conoce a un pequeño príncipe de otro planeta, quien le cuenta sus viajes por el universo.',
    idioma: 'español',
    precio: 12.95,
    stock: 30,
    portada: 'https://images-na.ssl-images-amazon.com/images/I/71OZY035FKL.jpg',
    disponible: true
  },
  {
    isbn: '9788490628560',
    titulo: 'El código Da Vinci',
    autor: 'Dan Brown',
    editorial: 'Planeta',
    anioPublicacion: 2003,
    generos: ['thriller', 'misterio'],
    numeroPaginas: 656,
    descripcion: 'Un asesinato en el Louvre inicia una búsqueda frenética de uno de los secretos más protegidos de la historia.',
    idioma: 'español',
    precio: 22.90,
    stock: 12,
    portada: 'https://images-na.ssl-images-amazon.com/images/I/91Q5dCjc2KL.jpg',
    disponible: true
  },
  {
    isbn: '9788466331876',
    titulo: 'Harry Potter y la piedra filosofal',
    autor: 'J.K. Rowling',
    editorial: 'Salamandra',
    anioPublicacion: 1997,
    generos: ['fantasía', 'aventura'],
    numeroPaginas: 254,
    descripcion: 'Un niño huérfano descubre que es un mago y comienza su educación en el Colegio Hogwarts de Magia y Hechicería.',
    idioma: 'español',
    precio: 19.95,
    stock: 25,
    portada: 'https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg',
    disponible: true
  },
  {
    isbn: '9788420471839',
    titulo: 'Orgullo y prejuicio',
    autor: 'Jane Austen',
    editorial: 'Alfaguara',
    anioPublicacion: 1813,
    generos: ['romance', 'histórico'],
    numeroPaginas: 424,
    descripcion: 'La historia de Elizabeth Bennet y el orgulloso Sr. Darcy en la Inglaterra del siglo XIX.',
    idioma: 'español',
    precio: 16.50,
    stock: 10,
    portada: 'https://images-na.ssl-images-amazon.com/images/I/71Q1tPupKjL.jpg',
    disponible: true
  },
  {
    isbn: '9788445077528',
    titulo: 'Sapiens: De animales a dioses',
    autor: 'Yuval Noah Harari',
    editorial: 'Debate',
    anioPublicacion: 2011,
    generos: ['no ficción', 'ciencia'],
    numeroPaginas: 496,
    descripcion: 'Una breve historia de la humanidad desde la Edad de Piedra hasta la actualidad.',
    idioma: 'español',
    precio: 24.90,
    stock: 18,
    portada: 'https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg',
    disponible: true
  },
  {
    isbn: '9788466339001',
    titulo: 'El nombre del viento',
    autor: 'Patrick Rothfuss',
    editorial: 'Plaza & Janés',
    anioPublicacion: 2007,
    generos: ['fantasía', 'aventura'],
    numeroPaginas: 872,
    descripcion: 'La historia de Kvothe, un legendario héroe, músico y mago, contada por él mismo.',
    idioma: 'español',
    precio: 28.90,
    stock: 14,
    portada: 'https://images-na.ssl-images-amazon.com/images/I/91V5PkC2JvL.jpg',
    disponible: true
  },
  {
    isbn: '9788408104407',
    titulo: 'La sombra del viento',
    autor: 'Carlos Ruiz Zafón',
    editorial: 'Planeta',
    anioPublicacion: 2001,
    generos: ['misterio', 'histórico'],
    numeroPaginas: 576,
    descripcion: 'En la Barcelona de posguerra, un joven descubre un libro maldito que cambiará su vida para siempre.',
    idioma: 'español',
    precio: 21.50,
    stock: 16,
    portada: 'https://images-na.ssl-images-amazon.com/images/I/51wlE+FxJwL.jpg',
    disponible: true
  },
  {
    isbn: '9788466343145',
    titulo: 'El hobbit',
    autor: 'J.R.R. Tolkien',
    editorial: 'Minotauro',
    anioPublicacion: 1937,
    generos: ['fantasía', 'aventura'],
    numeroPaginas: 304,
    descripcion: 'Bilbo Bolsón emprende una aventura épica con un grupo de enanos para recuperar un tesoro guardado por un dragón.',
    idioma: 'español',
    precio: 17.95,
    stock: 22,
    portada: 'https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg',
    disponible: true
  },
  {
    isbn: '9788420674179',
    titulo: 'Crónica de una muerte anunciada',
    autor: 'Gabriel García Márquez',
    editorial: 'Alfaguara',
    anioPublicacion: 1981,
    generos: ['ficción', 'novela'],
    numeroPaginas: 128,
    descripcion: 'La reconstrucción de un crimen de honor en un pueblo del Caribe colombiano.',
    idioma: 'español',
    precio: 14.90,
    stock: 11,
    portada: 'https://images-na.ssl-images-amazon.com/images/I/71VYvXz7zcL.jpg',
    disponible: true
  },
  {
    isbn: '9788408068235',
    titulo: 'Los pilares de la Tierra',
    autor: 'Ken Follett',
    editorial: 'Plaza & Janés',
    anioPublicacion: 1989,
    generos: ['histórico', 'novela'],
    numeroPaginas: 1008,
    descripcion: 'La construcción de una catedral en la Inglaterra medieval sirve de telón de fondo para una épica historia de ambición, amor y traición.',
    idioma: 'español',
    precio: 29.90,
    stock: 9,
    portada: 'https://images-na.ssl-images-amazon.com/images/I/91xq5guF+HL.jpg',
    disponible: true
  },
  {
    isbn: '9788420649566',
    titulo: 'Rayuela',
    autor: 'Julio Cortázar',
    editorial: 'Alfaguara',
    anioPublicacion: 1963,
    generos: ['ficción', 'novela'],
    numeroPaginas: 736,
    descripcion: 'Una novela experimental que puede ser leída en diferentes órdenes, siguiendo distintos tableros de dirección.',
    idioma: 'español',
    precio: 23.90,
    stock: 7,
    portada: 'https://images-na.ssl-images-amazon.com/images/I/71PiMxzfnZL.jpg',
    disponible: true
  },
  {
    isbn: '9788490626030',
    titulo: 'El amor en los tiempos del cólera',
    autor: 'Gabriel García Márquez',
    editorial: 'Debolsillo',
    anioPublicacion: 1985,
    generos: ['romance', 'ficción'],
    numeroPaginas: 496,
    descripcion: 'Una historia de amor que trasciende el tiempo entre Florentino Ariza y Fermina Daza.',
    idioma: 'español',
    precio: 19.90,
    stock: 13,
    portada: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
    disponible: true
  },
  {
    isbn: '9788423355914',
    titulo: 'La casa de los espíritus',
    autor: 'Isabel Allende',
    editorial: 'Debolsillo',
    anioPublicacion: 1982,
    generos: ['ficción', 'histórico'],
    numeroPaginas: 496,
    descripcion: 'La saga de la familia Trueba a través de cuatro generaciones en un país latinoamericano.',
    idioma: 'español',
    precio: 20.90,
    stock: 10,
    portada: 'https://images-na.ssl-images-amazon.com/images/I/81V4W8HQJPL.jpg',
    disponible: true
  },
  {
    isbn: '9788466331968',
    titulo: 'Juego de Tronos',
    autor: 'George R.R. Martin',
    editorial: 'Plaza & Janés',
    anioPublicacion: 1996,
    generos: ['fantasía', 'aventura'],
    numeroPaginas: 800,
    descripcion: 'En el reino de Poniente, varias familias nobles luchan por el control del Trono de Hierro.',
    idioma: 'español',
    precio: 26.90,
    stock: 17,
    portada: 'https://images-na.ssl-images-amazon.com/images/I/91dSMhdIzTL.jpg',
    disponible: true
  },
  {
    isbn: '9788408043621',
    titulo: 'El alquimista',
    autor: 'Paulo Coelho',
    editorial: 'Planeta',
    anioPublicacion: 1988,
    generos: ['ficción', 'autoayuda'],
    numeroPaginas: 192,
    descripcion: 'Un joven pastor andaluz viaja por el desierto en busca de un tesoro y descubre el verdadero significado de la vida.',
    idioma: 'español',
    precio: 15.90,
    stock: 19,
    portada: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
    disponible: true
  },
  {
    isbn: '9788490328262',
    titulo: 'El señor de los anillos: La comunidad del anillo',
    autor: 'J.R.R. Tolkien',
    editorial: 'Minotauro',
    anioPublicacion: 1954,
    generos: ['fantasía', 'aventura'],
    numeroPaginas: 576,
    descripcion: 'Frodo Bolsón hereda un anillo mágico que debe destruir para evitar que caiga en manos del Señor Oscuro.',
    idioma: 'español',
    precio: 24.95,
    stock: 12,
    portada: 'https://images-na.ssl-images-amazon.com/images/I/91jBdIDK9VL.jpg',
    disponible: true
  },
  {
    isbn: '9788466320221',
    titulo: 'El psicoanalista',
    autor: 'John Katzenbach',
    editorial: 'Ediciones B',
    anioPublicacion: 2002,
    generos: ['thriller', 'misterio'],
    numeroPaginas: 528,
    descripcion: 'Un psicoanalista recibe una carta anónima que le da 15 días para descubrir quién quiere destruir su vida.',
    idioma: 'español',
    precio: 21.90,
    stock: 8,
    portada: 'https://images-na.ssl-images-amazon.com/images/I/81KG8btmJhL.jpg',
    disponible: true
  },
  {
    isbn: '9788408114086',
    titulo: 'La catedral del mar',
    autor: 'Ildefonso Falcones',
    editorial: 'Debolsillo',
    anioPublicacion: 2006,
    generos: ['histórico', 'novela'],
    numeroPaginas: 672,
    descripcion: 'En la Barcelona medieval, un siervo de la gleba sueña con la libertad mientras participa en la construcción de Santa María del Mar.',
    idioma: 'español',
    precio: 22.90,
    stock: 11,
    portada: 'https://images-na.ssl-images-amazon.com/images/I/81u3wXEJ4VL.jpg',
    disponible: true
  },
  {
    isbn: '9788466331234',
    titulo: 'Dune',
    autor: 'Frank Herbert',
    editorial: 'Debolsillo',
    anioPublicacion: 1965,
    generos: ['ciencia ficción', 'aventura'],
    numeroPaginas: 688,
    descripcion: 'En el planeta desértico Arrakis, única fuente de la especia melange, Paul Atreides deberá enfrentar su destino.',
    idioma: 'español',
    precio: 25.90,
    stock: 14,
    portada: 'https://images-na.ssl-images-amazon.com/images/I/81ym2NAPXnL.jpg',
    disponible: true
  },
  {
    isbn: '9788420412184',
    titulo: 'La Odisea',
    autor: 'Homero',
    editorial: 'Alianza Editorial',
    anioPublicacion: 1488,
    generos: ['ficción', 'aventura'],
    numeroPaginas: 448,
    descripcion: 'El viaje épico de Odiseo de regreso a Ítaca tras la guerra de Troya.',
    idioma: 'español',
    precio: 18.50,
    stock: 9,
    portada: 'https://images-na.ssl-images-amazon.com/images/I/71KG5+7ELQL.jpg',
    disponible: true
  },
  {
    isbn: '9788408092070',
    titulo: 'Padre rico, padre pobre',
    autor: 'Robert Kiyosaki',
    editorial: 'Aguilar',
    anioPublicacion: 1997,
    generos: ['no ficción', 'autoayuda'],
    numeroPaginas: 264,
    descripcion: 'Lecciones sobre educación financiera y cómo alcanzar la libertad económica.',
    idioma: 'español',
    precio: 17.90,
    stock: 21,
    portada: 'https://images-na.ssl-images-amazon.com/images/I/81bsw6fnAeL.jpg',
    disponible: true
  },
  {
    isbn: '9788466331555',
    titulo: 'Los juegos del hambre',
    autor: 'Suzanne Collins',
    editorial: 'RBA Molino',
    anioPublicacion: 2008,
    generos: ['ciencia ficción', 'aventura'],
    numeroPaginas: 400,
    descripcion: 'En un futuro distópico, 24 jóvenes luchan a muerte en un reality show televisado.',
    idioma: 'español',
    precio: 19.90,
    stock: 16,
    portada: 'https://images-na.ssl-images-amazon.com/images/I/71WSvIPUJVL.jpg',
    disponible: true
  }
];

// Función para poblar la base de datos
const seedDatabase = async () => {
  try {
    console.log('🌱 Iniciando seed de la base de datos...\n');

    // Conectar a MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Conectado a MongoDB\n');

    // Limpiar colección existente
    await Libro.deleteMany({});
    console.log('🗑️  Colección limpiada\n');

    // Insertar libros
    const libros = await Libro.insertMany(librosData);
    console.log(`✅ ${libros.length} Libros insertados exitosamente\n`);

    // Mostrar algunos libros insertados
    console.log('📋 Primeros 5 Libros insertados:');
    libros.slice(0, 5).forEach((libro, index) => {
      console.log(`  ${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.anioPublicacion})`);
    });

    console.log('\n🎉 Seed completado exitosamente!');
    console.log('💡 Ahora puedes iniciar el servidor con: npm run dev\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error en el seed:', error.message);
    process.exit(1);
  }
};

// Ejecutar seed
seedDatabase();

