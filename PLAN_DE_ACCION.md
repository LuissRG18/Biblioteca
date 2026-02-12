# 🎯 PLAN DE ACCIÓN - Completar Proyecto Biblioteca MEAN

## 📊 Situación Actual

| Componente | Estado | Porcentaje | Crítico |
|------------|--------|------------|---------|
| **Backend** | ✅ Completo | 100% | No |
| **React** | 🔄 Parcial | 30% | ⚠️ SÍ (100% DIW) |
| **Angular** | ❌ Sin iniciar | 0% | ⚠️ SÍ (50% DWEC) |
| **Docs** | ✅ Completo | 100% | No |

**⚠️ ATENCIÓN:** Angular y React son CRÍTICOS para aprobar las asignaturas.

---

## 🚨 PRIORIDAD 1: Completar Frontend React (⏱️ 8-10 horas)

### ¿Por qué es crítico?
- Representa **100% de la nota de DIW**
- Ya tienes el 30% hecho (estructura base)
- Solo faltan componentes y lógica

### Pasos a Seguir

#### Paso 1: Renombrar y Actualizar Componentes (1h)

**Archivos a modificar:**

1. `PokemonBoard.tsx` → `LibroBoard.tsx`
2. `PokemonCard.tsx` → `LibroCard.tsx`  
3. `PokemonForm.tsx` → `LibroForm.tsx`

**Comandos:**
```bash
cd C:\Users\Luis\IdeaProjects\Pokedex\frontend-react\src\components

# Renombrar archivos
ren PokemonBoard.tsx LibroBoard.tsx
ren PokemonCard.tsx LibroCard.tsx
ren PokemonForm.tsx LibroForm.tsx
```

#### Paso 2: Implementar LibroBoard (2h)

**Objetivo:** Mostrar listado de libros con paginación y filtros

**Funcionalidades:**
- [ ] Llamar a `libroService.getAllLibros()`
- [ ] Mostrar libros en tabla Bootstrap
- [ ] Botones: Ver, Editar, Eliminar
- [ ] Paginación (Anterior/Siguiente)
- [ ] Filtro por género (select)
- [ ] Búsqueda por título (input)
- [ ] Loader mientras carga

**Hooks necesarios:**
```typescript
const [libros, setLibros] = useState<Libro[]>([]);
const [loading, setLoading] = useState(false);
const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);
const [genero, setGenero] = useState('');
```

#### Paso 3: Implementar LibroCard (30min)

**Objetivo:** Tarjeta visual de cada libro

**Contenido:**
- [ ] Imagen de portada
- [ ] Título
- [ ] Autor
- [ ] Precio
- [ ] Stock
- [ ] Botones: Ver detalle, Editar, Eliminar

**Usar:** Bootstrap Card component

#### Paso 4: Implementar LibroForm (3h)

**Objetivo:** Formulario para crear/editar libros

**Campos del formulario:**
- [ ] ISBN (input text)
- [ ] Título (input text)
- [ ] Autor (input text)
- [ ] Editorial (input text)
- [ ] Año de publicación (input number)
- [ ] Géneros (select multiple - máximo 3)
- [ ] Número de páginas (input number)
- [ ] Descripción (textarea)
- [ ] Idioma (select)
- [ ] Precio (input number)
- [ ] Stock (input number)
- [ ] Portada URL (input text)

**Validaciones:**
- [ ] Campos requeridos
- [ ] Rangos numéricos
- [ ] Formato ISBN
- [ ] Máximo 3 géneros

**Hooks necesarios:**
```typescript
const [formData, setFormData] = useState<LibroCreate>({...});
const [errors, setErrors] = useState<any>({});
const [submitting, setSubmitting] = useState(false);
```

#### Paso 5: Implementar LibroDetalle (1h)

**Objetivo:** Vista detallada de un libro

**Contenido:**
- [ ] Obtener libro por ID con `useParams()`
- [ ] Mostrar todos los campos
- [ ] Imagen grande de portada
- [ ] Botones: Volver, Editar, Eliminar

#### Paso 6: Rutas y Navegación (30min)

**Actualizar App.tsx:**
```typescript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/libros" element={<LibroBoard />} />
  <Route path="/libros/:id" element={<LibroDetalle />} />
  <Route path="/libros/nuevo" element={<LibroForm />} />
  <Route path="/libros/editar/:id" element={<LibroForm />} />
</Routes>
```

#### Paso 7: Mensajes y Loaders (1h)

**Implementar:**
- [ ] Toast/Alert de éxito al crear
- [ ] Toast/Alert de éxito al editar
- [ ] Toast/Alert de éxito al eliminar
- [ ] Alert de error en peticiones
- [ ] Spinner de carga (Bootstrap)
- [ ] Modal de confirmación para eliminar

#### Paso 8: Testing y Ajustes (1h)

- [ ] Probar crear libro
- [ ] Probar editar libro
- [ ] Probar eliminar libro
- [ ] Probar filtros
- [ ] Probar búsqueda
- [ ] Probar paginación
- [ ] Verificar responsive

### Recursos Necesarios

**Bootstrap Components a usar:**
- Table
- Card
- Form (Form.Group, Form.Control, Form.Select)
- Button
- Modal
- Alert
- Spinner
- Pagination

**Ejemplo de uso:**
```tsx
import { Button, Form, Alert, Spinner } from 'react-bootstrap';
```

---

## 🚨 PRIORIDAD 2: Crear Frontend Angular (⏱️ 10-12 horas)

### ¿Por qué es crítico?
- Representa **50% de la nota de DWEC**
- Sin esto, no apruebas DWEC
- Es obligatorio según el enunciado

### Pasos a Seguir

#### Paso 1: Crear Proyecto (30min)

```bash
cd C:\Users\Luis\IdeaProjects\Pokedex\frontend-angular

# Instalar Angular CLI globalmente (si no lo tienes)
npm install -g @angular/cli

# Crear proyecto
ng new . --routing --style=css --skip-git

# Responder a las preguntas:
# Would you like to enable autocompletion? Yes
# Would you like to share pseudonymous usage data? No
```

#### Paso 2: Instalar Dependencias (10min)

```bash
npm install bootstrap
npm install @popperjs/core
```

**Configurar Bootstrap en angular.json:**
```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```

#### Paso 3: Crear Servicio HTTP (1h)

```bash
ng generate service services/libro
```

**Implementar en `libro.service.ts`:**
- [ ] Inyectar HttpClient
- [ ] Método getAllLibros()
- [ ] Método getLibroById()
- [ ] Método createLibro()
- [ ] Método updateLibro()
- [ ] Método deleteLibro()

**Crear interfaces:**
```bash
ng generate interface models/libro
```

#### Paso 4: Crear Componentes (30min)

```bash
ng generate component components/navbar
ng generate component components/footer
ng generate component components/home
ng generate component components/libro-list
ng generate component components/libro-detalle
ng generate component components/libro-form
```

#### Paso 5: Implementar libro-list Component (2h)

**Objetivo:** Listado de libros con tabla Bootstrap

- [ ] Inyectar LibroService
- [ ] Obtener libros en ngOnInit
- [ ] Mostrar en tabla Bootstrap
- [ ] Botones Ver, Editar, Eliminar
- [ ] Paginación
- [ ] Filtros

#### Paso 6: Implementar libro-form Component (3h)

**Objetivo:** Formulario reactivo

```typescript
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
```

- [ ] Crear FormGroup con FormBuilder
- [ ] Agregar validadores
- [ ] Método onSubmit()
- [ ] Detectar si es crear o editar (por ruta)
- [ ] Mostrar errores de validación

#### Paso 7: Implementar libro-detalle Component (1h)

- [ ] Obtener ID de la ruta (ActivatedRoute)
- [ ] Llamar a servicio getLibroById()
- [ ] Mostrar información completa

#### Paso 8: Configurar Rutas (30min)

**En app-routing.module.ts:**
```typescript
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'libros', component: LibroListComponent },
  { path: 'libros/:id', component: LibroDetalleComponent },
  { path: 'libros/nuevo', component: LibroFormComponent },
  { path: 'libros/editar/:id', component: LibroFormComponent },
];
```

#### Paso 9: Implementar Loaders y Mensajes (1h)

- [ ] Spinner mientras carga (Bootstrap)
- [ ] Toasts/Alerts de éxito
- [ ] Alerts de error
- [ ] Confirmación de eliminación

#### Paso 10: Testing (1h)

- [ ] Probar todas las operaciones CRUD
- [ ] Verificar validaciones
- [ ] Probar navegación
- [ ] Verificar responsive

### Crear archivo .env (Angular usa environment)

**src/environments/environment.ts:**
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api/v1'
};
```

---

## 🎯 PRIORIDAD 3: Deploy (⏱️ 2-3 horas)

### Deploy Backend en Railway

**Pasos:**

1. Crear cuenta en [Railway.app](https://railway.app)
2. Nuevo proyecto → Deploy from GitHub
3. Seleccionar repositorio
4. Agregar variables de entorno:
   - `PORT=3000`
   - `MONGODB_URI=tu_connection_string`
   - `NODE_ENV=production`
5. Railway detectará automáticamente Node.js
6. Copiar URL pública (ej: `https://biblioteca-api.up.railway.app`)

### Deploy React en Vercel

**Pasos:**

1. Crear cuenta en [Vercel.com](https://vercel.com)
2. Importar proyecto desde GitHub
3. Configurar:
   - Framework Preset: Vite
   - Root Directory: `frontend-react`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Variables de entorno:
   - `VITE_API_URL=https://biblioteca-api.up.railway.app/api/v1`
5. Deploy
6. Copiar URL (ej: `https://biblioteca-react.vercel.app`)

### Deploy Angular en Vercel

**Similar a React:**
- Root Directory: `frontend-angular`
- Build Command: `npm run build`
- Output Directory: `dist/frontend-angular/browser`

---

## 📋 PRIORIDAD 4: Finalizar Documentación (⏱️ 1-2 horas)

### Crear Diagrama ER

**Herramientas:**
- [draw.io](https://app.diagrams.net/)
- [Lucidchart](https://www.lucidchart.com/)
- [dbdiagram.io](https://dbdiagram.io/)

**Contenido del diagrama:**
- Entidad LIBRO
- Todos los campos con tipos
- Indicar PKs, campos únicos
- Indicar campos requeridos
- Guardar como PNG y agregar a README

### Tomar Capturas de Pantalla

**Capturas necesarias (ambos frontends):**

1. Listado de libros
2. Detalle de un libro
3. Formulario de creación
4. Formulario de edición
5. Filtros funcionando
6. Búsqueda funcionando
7. Paginación
8. Mensaje de éxito
9. Mensaje de error

**Guardar en:** `docs/screenshots/` o en README

### Actualizar README

**Agregar:**
- [ ] URLs de deploy
- [ ] Capturas de pantalla
- [ ] Diagrama ER
- [ ] Instrucciones de uso

---

## 📊 CRONOGRAMA SUGERIDO (3 Semanas)

### Semana 1: Frontend React
- **Lunes-Martes:** Componentes LibroBoard y LibroCard (3h)
- **Miércoles-Jueves:** Componente LibroForm (3h)
- **Viernes:** LibroDetalle + Rutas + Testing (3h)

### Semana 2: Frontend Angular
- **Lunes:** Crear proyecto + Servicio (2h)
- **Martes:** Componente lista (2h)
- **Miércoles-Jueves:** Formulario reactivo (4h)
- **Viernes:** Detalle + Testing (2h)

### Semana 3: Deploy y Finalizar
- **Lunes:** Deploy de las 3 apps (3h)
- **Martes:** Capturas + Diagrama (2h)
- **Miércoles:** Revisión final (2h)
- **Jueves:** Buffer para ajustes
- **Viernes:** Entrega

---

## ✅ CHECKLIST FINAL ANTES DE ENTREGAR

### Backend ✅
- [x] API funcionando
- [x] Base de datos poblada
- [x] Documentación completa
- [ ] Desplegado y accesible

### Frontend React
- [ ] CRUD completo funcional
- [ ] Formularios con validaciones
- [ ] Paginación y filtros
- [ ] Bootstrap aplicado
- [ ] Loaders y mensajes
- [ ] Desplegado y accesible

### Frontend Angular
- [ ] CRUD completo funcional
- [ ] Formularios reactivos
- [ ] Servicios HTTP
- [ ] Validaciones
- [ ] Bootstrap aplicado
- [ ] Loaders y mensajes
- [ ] Desplegado y accesible

### Documentación
- [x] README completo
- [ ] URLs de deploy
- [ ] Capturas de pantalla
- [ ] Diagrama ER

### Repositorio
- [x] Código organizado
- [x] .gitignore configurado
- [x] README actualizado
- [ ] Sin archivos innecesarios

---

## 🚀 COMANDOS RÁPIDOS

### Iniciar Backend
```bash
cd C:\Users\Luis\IdeaProjects\Pokedex\backend
npm run dev
```

### Iniciar React
```bash
cd C:\Users\Luis\IdeaProjects\Pokedex\frontend-react
npm run dev
```

### Iniciar Angular (cuando esté creado)
```bash
cd C:\Users\Luis\IdeaProjects\Pokedex\frontend-angular
ng serve
```

### Abrir todas las apps
- Backend: http://localhost:3000/api/v1
- React: http://localhost:5173
- Angular: http://localhost:4200

---

## 💡 CONSEJOS FINALES

1. **No te saltes pasos** - Sigue el orden sugerido
2. **Testea constantemente** - Prueba cada componente al terminarlo
3. **Haz commits frecuentes** - Por si necesitas volver atrás
4. **Usa la documentación** - Tienes TODO documentado
5. **Pide ayuda si te atascas** - Mejor preguntar que perder tiempo
6. **Prioriza lo crítico** - React y Angular son MÁS importantes que deploy

---

## 📞 RECURSOS DE APOYO

**Documentación del proyecto:**
- `README.md` - Guía principal
- `CHECKLIST_PROYECTO.md` - Estado actual
- `RESUMEN_EJECUTIVO.md` - Visión general
- `backend/API_TESTING.md` - Testing de API
- `INICIO_RAPIDO.md` - Inicio rápido

**Documentación oficial:**
- React: https://react.dev
- Angular: https://angular.io
- Bootstrap: https://getbootstrap.com
- TypeScript: https://www.typescriptlang.org

**Tutoriales útiles:**
- React + TypeScript: https://react-typescript-cheatsheet.netlify.app
- Angular Forms: https://angular.io/guide/reactive-forms
- Bootstrap Components: https://getbootstrap.com/docs/5.3/components/

---

**⏰ TIEMPO TOTAL ESTIMADO: 20-25 horas**

**🎯 META: Tener todo listo en 2-3 semanas**

**💪 ¡TÚ PUEDES! El backend ya está excelente, solo falta completar los frontends.**

---

**Fecha del plan:** 12 de febrero de 2026  
**Última actualización:** 2026-02-12

