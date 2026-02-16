# 🚀 Guía Completa: Desplegar Biblioteca MEAN Stack a Vercel

## 📋 Resumen

Este proyecto consta de tres componentes que se desplegarán de manera independiente en Vercel:
1. **Backend API** (Express + MongoDB) → `biblioteca-api.vercel.app`
2. **Frontend Angular** → `biblioteca-angular.vercel.app`
3. **Frontend React** → `biblioteca-react.vercel.app`

---

## ✅ Pre-requisitos

- [ ] Cuenta en [Vercel](https://vercel.com) (gratuita)
- [ ] Repositorio en GitHub con el código
- [ ] MongoDB Atlas configurado y accesible (ya tienes: `mongodb+srv://biblioteca:...`)
- [ ] CLI de Vercel instalado: `npm install -g vercel`

---

## 🔧 Paso 1: Preparar el Repositorio

### 1.1 Inicializar Git (si no lo has hecho)

```powershell
cd C:\Users\Alumno1\IdeaProjects\Biblioteca
git init
git add .
git commit -m "Initial commit: MEAN Stack project"
git branch -M main
```

### 1.2 Conectar con GitHub

```bash
# Crear repositorio en GitHub desde https://github.com/new
# Luego ejecutar:
git remote add origin https://github.com/TU_USUARIO/biblioteca.git
git push -u origin main
```

### 1.3 Actualizar .env files

**Backend:**
```bash
# backend/.env (ya existe con tus datos)
PORT=3000
MONGODB_URI=mongodb+srv://biblioteca:dW1OqGGBz4E9k5lH@cluster0.t2wrxn9.mongodb.net/biblioteca?retryWrites=true&w=majority
NODE_ENV=development
```

---

## 🎯 Paso 2: Desplegar Backend a Vercel

### 2.1 Crear proyecto Backend en Vercel

```powershell
cd backend
vercel
```

Responde las preguntas:
- **Which scope?** → Tu cuenta personal
- **Link to existing project?** → No
- **Project name?** → `biblioteca-api`
- **Directory?** → `./` (current)

### 2.2 Configurar Variables de Entorno en Vercel

Opción A: **Via CLI**
```powershell
vercel env add MONGODB_URI
# Ingresa: mongodb+srv://biblioteca:dW1OqGGBz4E9k5lH@cluster0.t2wrxn9.mongodb.net/biblioteca?retryWrites=true&w=majority

vercel env add NODE_ENV
# Ingresa: production
```

Opción B: **Via Dashboard**
1. Ir a [vercel.com/dashboard](https://vercel.com/dashboard)
2. Seleccionar proyecto `biblioteca-api`
3. Settings → Environment Variables
4. Agregar:
   - `MONGODB_URI` = `mongodb+srv://biblioteca:...`
   - `NODE_ENV` = `production`

### 2.3 Desplegar Backend

```powershell
vercel --prod
```

**Resultado esperado:**
```
✓ Production (biblioteca-api.vercel.app)
```

### 2.4 Verificar Backend

```powershell
# Obtener la URL del deployment
vercel ls

# Probar endpoint
$url = "https://biblioteca-api.vercel.app/api/v1"
Invoke-WebRequest -Uri $url | Select-Object -ExpandProperty Content
```

---

## 🎨 Paso 3: Desplegar Frontend Angular a Vercel

### 3.1 Actualizar environment.prod.ts

```typescript
// frontend-angular/src/environments/environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://biblioteca-api.vercel.app/api/v1'
};
```

### 3.2 Crear proyecto Angular en Vercel

```powershell
cd ..\frontend-angular
vercel
```

Responde:
- **Project name?** → `biblioteca-angular`
- **Directory to deploy?** → `./` (current)

### 3.3 Configurar Build Settings

En el Dashboard de Vercel para `biblioteca-angular`:
1. Settings → Build & Development Settings
2. **Build Command:** `npm run build`
3. **Output Directory:** `dist/biblioteca-angular`

### 3.4 Desplegar

```powershell
vercel --prod
```

---

## ⚛️ Paso 4: Desplegar Frontend React a Vercel

### 4.1 Configurar variables de entorno

**frontend-react/.env.production:**
```bash
VITE_API_URL=https://biblioteca-api.vercel.app/api/v1
```

### 4.2 Crear proyecto React en Vercel

```powershell
cd ..\frontend-react
vercel
```

Responde:
- **Project name?** → `biblioteca-react`
- **Directory to deploy?** → `./` (current)

### 4.3 Configurar Build Settings

En el Dashboard:
1. Settings → Build & Development Settings
2. **Build Command:** `npm run build`
3. **Output Directory:** `dist`

### 4.4 Desplegar

```powershell
vercel --prod
```

---

## 🧪 Paso 5: Verificación Post-Deploy

### 5.1 Probar Backend

```powershell
# Verificar documentación
curl https://biblioteca-api.vercel.app/api/v1

# Obtener libros
curl "https://biblioteca-api.vercel.app/api/v1/libros/get/all?page=1&limit=10"
```

### 5.2 Probar Frontends

- **Angular:** https://biblioteca-angular.vercel.app
  - Verificar que carga sin errores
  - Verificar que lista de libros aparece
  
- **React:** https://biblioteca-react.vercel.app
  - Verificar que carga sin errores
  - Verificar que lista de libros aparece

### 5.3 Verificar Logs

```powershell
# Ver logs del backend
vercel logs biblioteca-api

# Ver logs de Angular
vercel logs biblioteca-angular

# Ver logs de React
vercel logs biblioteca-react
```

---

## ⚠️ Solución de Problemas

### Backend no conecta a MongoDB

**Error:** `MongooseError: Could not connect to MongoDB`

**Soluciones:**
1. Verificar MONGODB_URI en Vercel Dashboard
2. En MongoDB Atlas, ir a Network Access y whitelist: `0.0.0.0/0` (Vercel no tiene IPs fijas)
3. Verificar que la base de datos `biblioteca` existe en MongoDB Atlas

### Frontend no se conecta a Backend (CORS)

**Error:** `Access to XMLHttpRequest blocked by CORS policy`

**Soluciones:**
1. Verificar que CORS está configurado en `backend/src/app.js`
2. Agregar origen del frontend a la lista de `allowedOrigins`
3. Asegurar que `apiUrl` en frontend apunta a URL correcta

### Build falla en Vercel

**Error:** `Build step failed`

**Soluciones:**
1. Verificar logs: `vercel logs [proyecto]`
2. Asegurar que `package.json` tiene script `build`
3. Verificar que todas las dependencias están en `package.json` (no devDependencies críticas)
4. Ejecutar build localmente: `npm run build`

---

## 📊 URLs Finales

Una vez deployado, tendrás acceso a:

| Servicio | URL |
|----------|-----|
| Backend API | https://biblioteca-api.vercel.app |
| API Docs | https://biblioteca-api.vercel.app/api/v1 |
| Frontend Angular | https://biblioteca-angular.vercel.app |
| Frontend React | https://biblioteca-react.vercel.app |

---

## 🔐 Configuración de Seguridad

### Consideraciones importantes:

1. **No guardes credenciales en código** → Usar variables de entorno en Vercel
2. **Whitelist IPs MongoDB** → Usar `0.0.0.0/0` en desarrollo/testing (más restrictivo en producción)
3. **CORS restringido** → Solo orígenes autorizados
4. **Rate limiting** → Considerar agregar en futuro
5. **HTTPS** → Vercel lo hace automático

---

## 📈 Monitoreo Continuo

### Ver estado del proyecto:

```powershell
# Dashboard
vercel dashboard

# Ver últimos deployments
vercel ls

# Ver logs en tiempo real
vercel logs biblioteca-api --follow
```

### Configurar redeploy automático:

En Vercel Dashboard → Settings → Git → Deployment:
- **Branch:** main
- **Production:** Auto-deploy on push

---

## 🎯 Próximos Pasos

1. **Agregar validaciones** en formularios
2. **Implementar autenticación** JWT
3. **Agregar tests** (Jest, Jasmine)
4. **Mejorar performance** con caching
5. **Implementar logging** con herramientas como Sentry
6. **Dominio personalizado** (opcional)

---

**Última actualización:** 16 de febrero de 2026
**Estado:** 🟢 Listo para deployment

