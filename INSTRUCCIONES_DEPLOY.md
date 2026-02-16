# 🌐 Deploy del Proyecto Biblioteca a Vercel - Resumen Ejecutivo

## 📊 Diagrama de Arquitectura

```
┌─────────────────────────────────────────────────────────────┐
│                    Internet (Usuarios)                      │
└────────────┬──────────────────────────────────┬─────────────┘
             │                                  │
    ┌────────▼────────┐              ┌─────────▼────────┐
    │   Angular       │              │   React          │
    │   Vercel        │              │   Vercel         │
    │biblioteca-      │              │biblioteca-       │
    │angular.         │              │react.            │
    │vercel.app      │              │vercel.app        │
    └────────┬────────┘              └─────────┬────────┘
             │                                  │
             └──────────────────┬───────────────┘
                                │
                    ┌───────────▼────────────┐
                    │   Express API          │
                    │   Vercel               │
                    │   biblioteca-api.      │
                    │   vercel.app           │
                    └───────────┬────────────┘
                                │
                    ┌───────────▼────────────┐
                    │   MongoDB Atlas        │
                    │   cluster0.t2wrxn9     │
                    │   Datos: Libros        │
                    └────────────────────────┘
```

---

## 🚀 Pasos Para Hacer Deploy

### **PASO 1: Preparar el Repositorio (5 min)**

```powershell
# 1. Navegar al proyecto
cd C:\Users\Alumno1\IdeaProjects\Biblioteca

# 2. Inicializar Git si no existe
git init
git add .
git commit -m "Initial commit: MEAN Stack project"
git branch -M main

# 3. Crear repositorio en GitHub
# Ir a: https://github.com/new
# Crear repo: "biblioteca"

# 4. Conectar con GitHub
git remote add origin https://github.com/TU_USUARIO/biblioteca.git
git push -u origin main

# Reemplaza TU_USUARIO con tu usuario de GitHub
```

---

### **PASO 2: Instalar Vercel CLI (2 min)**

```powershell
# Instalar Vercel CLI globalmente
npm install -g vercel

# Verificar instalación
vercel --version

# Loguear en Vercel (se abrirá el navegador)
vercel login
```

---

### **PASO 3: Desplegar Backend (10 min)**

```powershell
# 1. Navegar a backend
cd backend

# 2. Iniciar deploy
vercel --prod

# 3. Responder preguntas:
#    - Scope: Tu email/cuenta
#    - Link to existing? → No
#    - Project name: biblioteca-api
#    - Directory: ./ (actual)

# 4. COPIAR LA URL DEL DEPLOY
# Ejemplo: https://biblioteca-api.vercel.app
```

**⚠️ Importante: Guardar la URL en un archivo de texto**

---

### **PASO 4: Configurar Variables de Entorno Backend (5 min)**

**Opción A: Via Vercel CLI**
```powershell
# Estando en carpeta backend
vercel env add MONGODB_URI
# Pegar: mongodb+srv://biblioteca:dW1OqGGBz4E9k5lH@cluster0.t2wrxn9.mongodb.net/biblioteca?retryWrites=true&w=majority

vercel env add NODE_ENV
# Escribir: production

# Redeploy automático
vercel --prod
```

**Opción B: Via Dashboard (Recomendado para principiantes)**

1. Ir a: https://vercel.com/dashboard
2. Seleccionar proyecto: `biblioteca-api`
3. Click en: **Settings**
4. Ir a: **Environment Variables**
5. Agregar variable:
   - **Name:** `MONGODB_URI`
   - **Value:** `mongodb+srv://biblioteca:dW1OqGGBz4E9k5lH@cluster0.t2wrxn9.mongodb.net/biblioteca?retryWrites=true&w=majority`
   - Click: **Save**

6. Agregar otra variable:
   - **Name:** `NODE_ENV`
   - **Value:** `production`
   - Click: **Save**

7. Volver a: **Deployments**
8. Seleccionar el último deployment (arriba)
9. Click: **Redeploy**

---

### **PASO 5: Desplegar Frontend Angular (5 min)**

```powershell
# 1. Navegar a Angular
cd ..\frontend-angular

# 2. Desplegar
vercel --prod

# 3. Responder:
#    - Project name: biblioteca-angular
#    - Directory: ./

# LISTO! Guardar URL: https://biblioteca-angular.vercel.app
```

---

### **PASO 6: Desplegar Frontend React (5 min)**

```powershell
# 1. Navegar a React
cd ..\frontend-react

# 2. Desplegar
vercel --prod

# 3. Responder:
#    - Project name: biblioteca-react
#    - Directory: ./

# LISTO! Guardar URL: https://biblioteca-react.vercel.app
```

---

## ✅ Verificación Final

Abre en tu navegador:

| URL | Qué deberías ver |
|-----|------------------|
| https://biblioteca-api.vercel.app/api/v1 | JSON con endpoints de la API |
| https://biblioteca-angular.vercel.app | Aplicación Angular con lista de libros |
| https://biblioteca-react.vercel.app | Aplicación React con lista de libros |

### Si todo carga correctamente: ✅ **¡PROYECTO DESPLEGADO!**

---

## 🐛 Solución de Problemas Comunes

### ❌ "Backend returns 500 error"
**Solución:**
1. Ir a: https://vercel.com/dashboard
2. Seleccionar: `biblioteca-api`
3. Ir a: **Deployments**
4. Click en el deployment fallido
5. Ver **Logs** para identificar el error
6. Problema más común: `MONGODB_URI` no configurado
   → Ver **PASO 4** para configurar variables

### ❌ "Frontend muestra lista vacía"
**Solución:**
1. Abrir **Developer Tools** (F12)
2. Ir a **Console** y **Network**
3. Verificar que requests a API tienen status 200
4. Si hay error CORS, la URL del API en `environment.prod.ts` es incorrecta
5. Verificar que coincida con la URL real de Vercel

### ❌ "MongoDB connection error"
**Solución:**
1. Ir a: https://cloud.mongodb.com
2. Seleccionar cluster: `Cluster0`
3. Ir a: **Network Access**
4. Verificar que hay una regla que permite `0.0.0.0/0`
   (Si no, agregar: Click **Add IP Address** → **Allow access from anywhere**)

---

## 📚 URLs Útiles

| Recurso | URL |
|---------|-----|
| Dashboard Vercel | https://vercel.com/dashboard |
| GitHub | https://github.com |
| MongoDB Atlas | https://cloud.mongodb.com |
| Documentación Vercel | https://vercel.com/docs |

---

## 📈 ¿Qué Sigue Después del Deploy?

1. **Compartir proyecto:** Envía las URLs a tu profesor/equipo
2. **Agregar funciones:** Implementar autenticación, validaciones, etc.
3. **Mejorar UI/UX:** Diseño, responsividad, animaciones
4. **Tests:** Agregar pruebas automáticas
5. **Monitoreo:** Configurar alertas en Vercel

---

## 🎓 Aprendizajes Clave

- ✅ Vercel es gratis para proyectos pequeños
- ✅ Permite desplegar 3 proyectos independientes (Backend + 2 Frontends)
- ✅ Integración con GitHub para CI/CD automático
- ✅ MongoDB Atlas también tiene plan gratuito
- ✅ Toda la pila MEAN en la nube sin costo

---

**¡Ahora estás listo para hacer el deploy! Sigue los 6 pasos y tendrás tu aplicación en la nube en menos de 30 minutos.** 🚀

---

*Última actualización: 16 de febrero de 2026*
*Versión: 1.0*

