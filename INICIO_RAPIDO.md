# 🚀 GUÍA DE INICIO RÁPIDO - Biblioteca MEAN

## ✅ Estado del Proyecto

✔️ **Backend (Fase 1)** - COMPLETO  
✔️ **Frontend React (Fase 3)** - EN PROGRESO (estructura base lista)
⏳ **Frontend Angular (Fase 2)** - PENDIENTE

---

## 📋 PASOS PARA EJECUTAR

### **1️⃣ Configurar MongoDB Atlas**

Sigue estos pasos:

1. Crea cuenta: https://www.mongodb.com/cloud/atlas
2. Crea cluster M0 (gratis)
3. Crea usuario `biblioteca` con contraseña
4. Whitelist IP: `0.0.0.0/0` (para desarrollo)
5. Obtén tu connection string
6. Edita `backend/.env`:

```env
PORT=3000
MONGODB_URI=mongodb+srv://biblioteca:TU_PASSWORD@cluster0.xxxxx.mongodb.net/biblioteca?retryWrites=true&w=majority
NODE_ENV=development
```

**IMPORTANTE:** Reemplaza `TU_PASSWORD` con tu contraseña real de MongoDB.

---

### **2️⃣ Iniciar Backend**

```bash
cd backend
npm install     # Instalar dependencias (solo primera vez)
npm run seed    # Poblar BD con 25 libros (solo 1 vez)
npm run dev     # Iniciar servidor
```

✅ Debe mostrar: 
```
✅ MongoDB conectado: cluster0.xxxxx.mongodb.net
📚 Base de datos: biblioteca
🚀 Servidor corriendo en puerto 3000
```

**Verificar API:** Abre http://localhost:3000/api/v1 en tu navegador

---

### **3️⃣ Iniciar Frontend React**

```bash
cd frontend-react
npm install     # Instalar dependencias (solo primera vez)
npm run dev     # Iniciar servidor de desarrollo
```

✅ Abre: http://localhost:5173

---

## 🧪 Probar

**Backend:** http://localhost:3000/api/v1  
**Frontend:** http://localhost:5173

**Funcionalidades:**
- Filtrar por tipo
- Paginación
- Marcar favoritos
- Eliminar pokémons

---

## 📁 Estructura

```
Pokedex/
├── backend/              # API (Node + Express + MongoDB)
├── frontend-react/       # Cliente React
├── frontend-angular/     # Cliente Angular (pendiente)
├── README.md
└── INICIO_RAPIDO.md
```

---

## 🐛 Problemas Comunes

**No se conecta MongoDB:**  
→ Verifica `backend/.env` con contraseña correcta

**No se ven pokémons:**  
→ Ejecuta `npm run seed` en backend

**Error CORS:**  
→ Backend ya tiene CORS, reinicia ambos servidores

---

Lee `README.md` para documentación completa. 🎉

