# 📚 Biblioteca MEAN + Angular + React

Proyecto Full-Stack completo utilizando arquitectura MEAN con dos clientes frontend (Angular y React) que consumen la misma API REST.

> **📊 Estado del Proyecto:** 🟢 Backend (100%) | 🟢 Angular (100%) | 🟢 React (100%) | 🟢 Docs (100%)  
> **✅ PROYECTO COMPLETADO AL 100%**  
> **📋 Ver checklist completo:** [`CHECKLIST_PROYECTO.md`](./CHECKLIST_PROYECTO.md)  
> **🎉 React completado:** Ver [`frontend-react/COMPLETADO.md`](./frontend-react/COMPLETADO.md)  
> **🎉 Angular completado:** Ver [`frontend-angular/ANGULAR_COMPLETADO.md`](./frontend-angular/ANGULAR_COMPLETADO.md)

---

## ✨ Características Destacadas

- 🎯 **CRUD Completo** en ambos frontends (Angular y React)
- 📊 **Paginación** del lado del servidor
- 🔍 **Filtros Avanzados** (por género, disponibilidad, búsqueda)
- ✅ **Validaciones** en tiempo real en formularios
- 🎨 **Bootstrap 5** para UI moderna y responsive
- 📱 **Diseño Responsive** (mobile, tablet, desktop)
- 🔄 **Loading States** y mensajes de éxito/error
- 🛡️ **Reglas de Negocio** implementadas en el backend
- 📚 **Base de Datos** poblada con 25+ libros de ejemplo
- 📖 **Documentación Completa** para cada componente

---

## 🚀 Inicio Rápido

```bash
# Backend (Terminal 1)
cd backend
npm install
npm run seed
npm start  # http://localhost:3000

# Frontend Angular (Terminal 2)
cd frontend-angular
npm install
npm start  # http://localhost:4200

# Frontend React (Terminal 3)
cd frontend-react
npm install
npm run dev  # http://localhost:3001
```

---

## 📑 Tabla de Contenidos

- [Descripción del Proyecto](#-descripción-del-proyecto)
- [Modelo de Datos](#️-entidades-y-modelo-de-datos)
- [Reglas de Negocio](#-reglas-de-negocio)
- [Endpoints API](#-endpoints-de-la-api)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Cumplimiento de Requisitos](#-cumplimiento-de-requisitos-del-proyecto)
- [Documentación Adicional](#-documentación-adicional)

---

## 📖 Documentación Adicional

| Documento | Descripción |
|-----------|-------------|
| [`INICIO_RAPIDO.md`](./INICIO_RAPIDO.md) | Guía rápida para iniciar el proyecto en 5 minutos |
| [`PROYECTO_COMPLETO.md`](./PROYECTO_COMPLETO.md) | Resumen ejecutivo completo del proyecto |
| [`INICIO_PROYECTO.md`](./INICIO_PROYECTO.md) | Guía para iniciar todo el proyecto (Backend + Frontends) |
| [`CHECKLIST_PROYECTO.md`](./CHECKLIST_PROYECTO.md) | Checklist completo de requisitos y rúbrica de evaluación |
| [`RESUMEN_EJECUTIVO.md`](./RESUMEN_EJECUTIVO.md) | Resumen ejecutivo del proyecto para entrega |
| [`PLAN_DE_ACCION.md`](./PLAN_DE_ACCION.md) | Plan paso a paso para completar React y Angular |
| [`backend/MONGODB_SETUP_TUTORIAL.md`](./backend/MONGODB_SETUP_TUTORIAL.md) | Tutorial completo de configuración MongoDB Atlas |
| [`backend/API_TESTING.md`](./backend/API_TESTING.md) | Guía de testing con ejemplos y casos de prueba |
| [`frontend-react/README.md`](./frontend-react/README.md) | Documentación específica del frontend React |
| [`frontend-react/COMPLETADO.md`](./frontend-react/COMPLETADO.md) | Estado de completado del frontend React |
| [`frontend-angular/README.md`](./frontend-angular/README.md) | Documentación específica del frontend Angular |
| [`frontend-angular/ANGULAR_README.md`](./frontend-angular/ANGULAR_README.md) | Documentación técnica completa de Angular |
| [`frontend-angular/INICIO_RAPIDO.md`](./frontend-angular/INICIO_RAPIDO.md) | Guía de inicio rápido para Angular |
| [`frontend-angular/ANGULAR_COMPLETADO.md`](./frontend-angular/ANGULAR_COMPLETADO.md) | Estado de completado del frontend Angular |

---

## 📋 Descripción del Proyecto

**Nombre:** Sistema de Gestión de Biblioteca Full-Stack MEAN

**Problema a Resolver:** Crear una plataforma completa para la gestión de una biblioteca, permitiendo a los usuarios administrar un catálogo de libros con operaciones CRUD completas, filtrado por género, búsqueda por autor y control de inventario.

**Descripción Funcional:**
Sistema full-stack que permite a los usuarios:
- ✅ Consultar catálogo completo de libros con paginación
- ✅ Crear nuevos registros de libros con validaciones
- ✅ Actualizar información de libros existentes
- ✅ Eliminar libros de la base de datos
- ✅ Filtrar por género literario
- ✅ Buscar por autor o título
- ✅ Control de stock y disponibilidad
- ✅ Visualizar detalles completos de cada libro
- ✅ Gestión de precios e inventario

---

## 🗄️ Entidades y Modelo de Datos

### **Entidad: Libro**

| Campo | Tipo | Descripción | Restricciones |
|-------|------|-------------|---------------|
| `_id` | ObjectId | Identificador único de MongoDB | Auto-generado |
| `isbn` | String | Número ISBN del libro | Único, requerido, formato ISBN-10 o ISBN-13 |
| `titulo` | String | Título del libro | Requerido, minLength: 2, maxLength: 200 |
| `autor` | String | Autor del libro | Requerido, minLength: 2 |
| `editorial` | String | Editorial del libro | Requerido |
| `anioPublicacion` | Number | Año de publicación | Requerido, rango: 1000-2026 |
| `generos` | Array[String] | Géneros literarios | Requerido, min: 1, max: 3 |
| `numeroPaginas` | Number | Número de páginas | Requerido, rango: 1-10000 |
| `descripcion` | String | Descripción/sinopsis | Requerido, maxLength: 2000 |
| `idioma` | String | Idioma del libro | Requerido, valores: español, inglés, francés, alemán, portugués, italiano, otro |
| `precio` | Number | Precio del libro | Requerido, rango: 0-10000 |
| `stock` | Number | Cantidad disponible | Requerido, min: 0, default: 1 |
| `disponible` | Boolean | Indica si hay stock | Auto-calculado |
| `portada` | String | URL de la imagen de portada | Opcional |
| `createdAt` | Date | Fecha de creación | Auto-generado |
| `updatedAt` | Date | Fecha de actualización | Auto-generado |

**Géneros Válidos:** 
`ficción`, `no ficción`, `novela`, `ciencia ficción`, `fantasía`, `thriller`, `misterio`, `romance`, `histórico`, `biografía`, `autoayuda`, `tecnología`, `ciencia`, `poesía`, `drama`, `terror`, `aventura`, `policial`, `filosofía`, `ensayo`

---

## 📐 Reglas de Negocio

### 1. **No Duplicados de ISBN**
- No se pueden crear dos libros con el mismo ISBN
- Validación en creación y actualización

### 2. **Control de Stock y Disponibilidad**
- Un libro se marca automáticamente como `disponible: false` cuando `stock = 0`
- Al actualizar el stock, la disponibilidad se recalcula automáticamente

### 3. **Validación de Géneros Literarios**
- Solo se permiten géneros de la lista predefinida
- Cada libro debe tener entre 1 y 3 géneros
- Los géneros se normalizan a minúsculas automáticamente

### 4. **Validación de ISBN**
- Formato ISBN-10 (10 dígitos) o ISBN-13 (13 dígitos)
- Se permite con o sin guiones

### 5. **Validación de Año de Publicación**
- No se permiten años anteriores al año 1000
- No se permiten años futuros (máximo año actual: 2026)

### 6. **Validación de Precios**
- El precio debe ser mayor o igual a 0
- Máximo permitido: 10,000

---

## 🔌 Endpoints de la API

**Base URL:** `http://localhost:3000/api/v1`

### Documentación
```
GET /api/v1/
```
Retorna la documentación completa de endpoints disponibles.

### Obtener todos los libros
```
GET /api/v1/libros/get/all
```
**Query Parameters:**
- `page` (opcional): Número de página (default: 1)
- `limit` (opcional): Elementos por página (default: 20)
- `genero` (opcional): Filtrar por género (ej: `ficción`)
- `disponible` (opcional): Filtrar por disponibilidad (`true`/`false`)
- `search` (opcional): Buscar por título
- `autor` (opcional): Buscar por autor

**Ejemplo:**
```
GET /api/v1/libros/get/all?page=1&limit=10&genero=fantasía&disponible=true
```

### Obtener libro por ID
```
GET /api/v1/libros/get/:id
```

### Crear nuevo libro
```
POST /api/v1/libros/post
```
**Body (JSON):**
```json
{
  "isbn": "9788408043640",
  "titulo": "Cien años de soledad",
  "autor": "Gabriel García Márquez",
  "editorial": "Editorial Sudamericana",
  "anioPublicacion": 1967,
  "generos": ["ficción", "novela"],
  "numeroPaginas": 471,
  "descripcion": "La obra maestra del realismo mágico...",
  "idioma": "español",
  "precio": 25.99,
  "stock": 15,
  "portada": "https://ejemplo.com/portada.jpg"
}
```

### Actualizar libro
```
PATCH /api/v1/libros/update/:id
```
**Body (JSON):** Campos a actualizar

### Eliminar libro
```
DELETE /api/v1/libros/delete/:id
```

---

## 🚀 Instalación y Configuración

### Backend

1. **Navegar a la carpeta backend:**
```bash
cd backend
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Configurar variables de entorno:**

Crear archivo `.env` en la raíz de `backend/`:
```env
PORT=3000
MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/biblioteca?retryWrites=true&w=majority
NODE_ENV=development
```

4. **Poblar la base de datos:**
```bash
npm run seed
```

5. **Iniciar servidor:**
```bash
npm run dev     # Modo desarrollo con hot-reload
npm start       # Modo producción
```

El servidor estará disponible en: `http://localhost:3000`

### Frontend Angular

1. **Navegar a la carpeta frontend-angular:**
```bash
cd frontend-angular
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Iniciar servidor de desarrollo:**
```bash
npm start
# o
ng serve
```

La aplicación estará disponible en: `http://localhost:4200`

### Frontend React

1. **Navegar a la carpeta frontend-react:**
```bash
cd frontend-react
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Iniciar servidor de desarrollo:**
```bash
npm run dev
```

La aplicación estará disponible en: `http://localhost:3001`

---

## 🌐 URLs de Acceso

Una vez todo esté corriendo:

| Componente | URL | Puerto |
|------------|-----|--------|
| **Backend API** | http://localhost:3000 | 3000 |
| **API Docs** | http://localhost:3000/api/v1 | 3000 |
| **Frontend Angular** | http://localhost:4200 | 4200 |
| **Frontend React** | http://localhost:3001 | 3001 |

---

## 📦 Dependencias Backend

- **express**: ^4.18.2 - Framework web
- **mongoose**: ^8.23.0 - ODM para MongoDB
- **cors**: ^2.8.5 - Manejo de CORS
- **dotenv**: ^16.6.1 - Variables de entorno
- **mongodb**: ^7.1.0 - Driver de MongoDB

---

## 📊 Estructura del Proyecto

```
/Biblioteca
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js          # Configuración de MongoDB
│   │   ├── models/
│   │   │   └── Libro.js             # Modelo de Libro
│   │   ├── controllers/
│   │   │   └── libroController.js   # Controladores CRUD
│   │   ├── routes/
│   │   │   └── libroRoutes.js       # Definición de rutas
│   │   ├── middlewares/
│   │   │   └── errorHandler.js      # Manejo de errores
│   │   └── app.js                   # Configuración de Express
│   ├── scripts/
│   │   └── seedLibros.js            # Script para poblar DB
│   ├── server.js                    # Punto de entrada
│   ├── package.json
│   └── .env
├── frontend-angular/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── navbar/
│   │   │   │   ├── footer/
│   │   │   │   ├── home/
│   │   │   │   ├── libro-list/      # Tabla con paginación y filtros
│   │   │   │   ├── libro-detalle/   # Vista detallada
│   │   │   │   └── libro-form/      # Formulario reactivo
│   │   │   ├── services/
│   │   │   │   └── libro.service.ts # Servicio HTTP
│   │   │   ├── models/
│   │   │   │   └── libro.model.ts   # Interfaces TypeScript
│   │   │   ├── app.module.ts
│   │   │   └── app-routing.module.ts
│   │   ├── environments/
│   │   │   ├── environment.ts
│   │   │   └── environment.prod.ts
│   │   └── index.html
│   ├── angular.json
│   └── package.json
├── frontend-react/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Home.tsx
│   │   │   ├── LibroBoard.tsx       # Listado con cards
│   │   │   ├── LibroCard.tsx
│   │   │   ├── LibroDetalle.tsx
│   │   │   └── LibroForm.tsx
│   │   ├── services/
│   │   │   └── libroService.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/
│   ├── index.html
│   ├── package.json
│   └── vite.config.ts
└── README.md
```

---

## 🧪 Testing con Postman/Thunder Client

### Ejemplos de Peticiones

**1. Obtener todos los libros:**
```
GET http://localhost:3000/api/v1/libros/get/all
```

**2. Filtrar por género:**
```
GET http://localhost:3000/api/v1/libros/get/all?genero=fantasía
```

**3. Buscar por autor:**
```
GET http://localhost:3000/api/v1/libros/get/all?autor=García Márquez
```

**4. Crear libro:**
```
POST http://localhost:3000/api/v1/libros/post
Content-Type: application/json

{
  "isbn": "1234567890",
  "titulo": "Nuevo Libro",
  "autor": "Autor Ejemplo",
  "editorial": "Editorial Test",
  "anioPublicacion": 2024,
  "generos": ["ficción"],
  "numeroPaginas": 300,
  "descripcion": "Descripción del libro...",
  "idioma": "español",
  "precio": 19.99,
  "stock": 10
}
```

---

## 🎯 Estado del Proyecto

### ✅ Completado (Fase 1 - Backend)
- [x] Modelo de datos (Libro)
- [x] CRUD completo
- [x] Validaciones y reglas de negocio
- [x] Paginación
- [x] Filtros y búsquedas
- [x] Base de datos poblada (25 libros)
- [x] Manejo de errores
- [x] Conexión MongoDB Atlas
- [x] Script de seed

### ✅ Completado (Fase 2 - Frontend Angular)
- [x] Servicios HTTP (LibroService)
- [x] 6 Componentes (Navbar, Footer, Home, LibroList, LibroDetalle, LibroForm)
- [x] Formularios reactivos con FormBuilder
- [x] Validaciones frontend en tiempo real
- [x] Bootstrap 5 UI completamente integrado
- [x] Paginación y filtros avanzados
- [x] Routing configurado
- [x] HttpClient para peticiones
- [x] Interfaces TypeScript
- [x] Loading states y mensajes de éxito/error

### ✅ Completado (Fase 3 - Frontend React)
- [x] Componentes funcionales
- [x] Hooks (useState, useEffect, useParams, useNavigate)
- [x] Axios para peticiones HTTP
- [x] CRUD completo funcionando
- [x] Formularios controlados con validaciones
- [x] Bootstrap 5 UI
- [x] React Router DOM
- [x] Paginación y filtros
- [x] Loading states y mensajes

### 🎊 PROYECTO COMPLETADO AL 100%
- [x] Backend funcionando en puerto 3000
- [x] Frontend React funcionando en puerto 3001
- [x] Frontend Angular funcionando en puerto 4200
- [x] MongoDB con datos de prueba
- [x] Documentación completa
- [x] Todos los requisitos cumplidos

---

## 👨‍💻 Autor

**Luis**  
Proyecto Final Integrador - MEAN Stack + Angular + React

---

## 📄 Licencia

ISC

---

## 🗃️ Configuración de MongoDB Atlas

### Paso 1: Crear Cuenta en MongoDB Atlas

1. Ir a [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Crear cuenta gratuita (Sign Up)
3. Verificar email

### Paso 2: Crear Cluster Gratuito

1. Clic en **"Build a Database"**
2. Seleccionar **"M0 FREE"** (Shared)
3. Elegir región cercana (ejemplo: AWS / Frankfurt)
4. Nombre del cluster: `Cluster0` (default)
5. Clic en **"Create"**

### Paso 3: Configurar Usuario de Base de Datos

1. Ir a **"Database Access"** (menú izquierdo)
2. Clic en **"Add New Database User"**
3. Configurar:
   - Authentication Method: **Password**
   - Username: `biblioteca_admin`
   - Password: Generar una segura (guardarla)
   - Database User Privileges: **"Atlas admin"**
4. Clic en **"Add User"**

### Paso 4: Permitir Conexión desde Cualquier IP

1. Ir a **"Network Access"** (menú izquierdo)
2. Clic en **"Add IP Address"**
3. Clic en **"Allow Access from Anywhere"**
4. IP: `0.0.0.0/0` (para desarrollo)
5. Clic en **"Confirm"**

### Paso 5: Obtener Connection String

1. Ir a **"Database"** → Cluster0
2. Clic en **"Connect"**
3. Seleccionar **"Connect your application"**
4. Driver: **Node.js**, Version: **5.5 or later**
5. Copiar el string de conexión:
```
mongodb+srv://biblioteca_admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

### Paso 6: Crear Archivo .env en Backend

Crear archivo `backend/.env`:
```env
PORT=3000
MONGODB_URI=mongodb+srv://biblioteca_admin:TU_PASSWORD_AQUI@cluster0.xxxxx.mongodb.net/biblioteca?retryWrites=true&w=majority
NODE_ENV=development
```

**⚠️ IMPORTANTE:** Reemplazar:
- `TU_PASSWORD_AQUI` con la contraseña del usuario
- `xxxxx` con el ID de tu cluster
- Agregar `/biblioteca` antes de `?retryWrites` para especificar la base de datos

**📚 Ver tutorial completo:** [`backend/MONGODB_SETUP_TUTORIAL.md`](./backend/MONGODB_SETUP_TUTORIAL.md)

---

## 📦 Instalación y Ejecución

### Backend (Node.js + Express + MongoDB)
```bash
cd backend
npm install
npm run seed    # Poblar base de datos con 25 libros
npm run dev     # Iniciar servidor en http://localhost:3000
```

### Frontend React
```bash
cd frontend-react
npm install
npm run dev     # Iniciar en http://localhost:5173
```

### Frontend Angular (Próximamente)
```bash
cd frontend-angular
npm install
ng serve        # Iniciar en http://localhost:4200
```

---

## 🛠️ Tecnologías Utilizadas

### Backend
- Node.js v18+
- Express 4.x
- MongoDB + Mongoose
- CORS
- dotenv

### Frontend React
- React 19
- React Router DOM 7
- Bootstrap 5
- TypeScript
- Vite
- Axios

### Frontend Angular
- Angular 17
- Angular Router
- Angular Reactive Forms
- HttpClient
- Bootstrap 5
- Bootstrap Icons
- TypeScript 5.2
- RxJS

---

## 📊 Cumplimiento de Requisitos del Proyecto

### ✅ Fase 1 - Backend (100% Completo)
- [x] Arquitectura MEAN correcta
- [x] API REST con Node.js + Express + MongoDB
- [x] CRUD completo (5 endpoints + documentación)
- [x] Modelo con todos los campos requeridos
- [x] 6 reglas de negocio implementadas
- [x] Validaciones completas
- [x] Manejo de errores con status codes
- [x] Base de datos poblada con 25 libros
- [x] Paginación, filtros y búsqueda
- [x] Documentación completa

### ✅ Fase 2 - Frontend Angular (100% Completo)
- [x] Proyecto Angular 17 creado
- [x] Servicios HTTP con HttpClient (LibroService)
- [x] 6 Componentes (Navbar, Footer, Home, LibroList, LibroDetalle, LibroForm)
- [x] Formularios reactivos con FormBuilder y Validators
- [x] Consumo completo de API
- [x] Bootstrap 5 UI completamente integrado
- [x] Paginación del lado del servidor
- [x] Filtros avanzados (búsqueda, género, disponibilidad)
- [x] Routing configurado (5 rutas)
- [x] Interfaces TypeScript
- [x] Validaciones en tiempo real
- [x] Loading states y mensajes de éxito/error
- [x] Diseño responsive

### ✅ Fase 3 - Frontend React (100% Completo)
- [x] Estructura base con Vite + TypeScript
- [x] Servicio API completo con Axios
- [x] 7 Componentes funcionales con hooks
- [x] React Router DOM configurado
- [x] CRUD completo funcionando
- [x] Formularios controlados con validaciones
- [x] Bootstrap 5 UI
- [x] Paginación y filtros
- [x] Loading states y mensajes
- [x] Diseño responsive
- [x] Formularios controlados con validaciones
- [x] Bootstrap UI completo
- [x] Paginación y filtros
- [x] Vista de detalle y edición

### ✅ Documentación (100% Completa)
- [x] README completo con todos los apartados
- [x] Endpoints documentados
- [x] Reglas de negocio explicadas
- [x] Guías de instalación
- [x] Tutoriales MongoDB

**📋 Ver checklist detallado:** [`CHECKLIST_PROYECTO.md`](./CHECKLIST_PROYECTO.md)

---

## 🌐 URLs de Desarrollo

### API Backend
- **Local:** http://localhost:3000/api/v1
- **Documentación API:** http://localhost:3000/api/v1

### Frontend React
- **Local:** http://localhost:5173

### Frontend Angular (Próximamente)
- **Local:** http://localhost:4200

---

## 📈 Próximos Pasos

1. **Prioridad Alta:** Implementar Frontend Angular completo
2. **Prioridad Media:** Deploy de todas las aplicaciones
3. **Prioridad Baja:** Agregar capturas de pantalla

---

## 👨‍💻 Autor

**Luis** - Proyecto Final Integrador MEAN + Angular + React

**Fecha:** Febrero 2026

**Institución:** Desarrollo de Aplicaciones Web

---

## 📄 Licencia

ISC - Proyecto académico
```
