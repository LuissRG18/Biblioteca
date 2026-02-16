# ✅ Checklist Pre-Deployment a Vercel

## 📋 Verificación del Código

### Backend
- [x] `backend/server.js` - Actualizado para Vercel (export app + NODE_ENV check)
- [x] `backend/src/app.js` - CORS configurado con orígenes de Vercel
- [x] `backend/.env` - Contiene MONGODB_URI y PORT
- [x] `backend/vercel.json` - Creado con configuración serverless
- [x] `backend/package.json` - Contiene scripts `start` y `dev`
- [x] MongoDB Atlas - Base de datos creada y accesible

### Frontend Angular
- [x] `frontend-angular/src/environments/environment.prod.ts` - Apunta a biblioteca-api.vercel.app
- [x] `frontend-angular/src/environments/environment.ts` - Apunta a localhost:3000
- [x] `frontend-angular/vercel.json` - Creado con configuración SPA
- [x] `frontend-angular/angular.json` - Build output: `dist/biblioteca-angular`
- [x] `frontend-angular/package.json` - Script build presente
- [x] Bootstrap instalado - `npm install bootstrap @popperjs/core`

### Frontend React
- [x] `frontend-react/src/services/libroService.ts` - Usa VITE_API_URL
- [x] `frontend-react/.env.production` - Contiene VITE_API_URL
- [x] `frontend-react/vite.config.ts` - Configurado correctamente
- [x] `frontend-react/vercel.json` - Creado con configuración SPA
- [x] `frontend-react/package.json` - Script build presente
- [x] Bootstrap instalado - `npm install bootstrap`

### Proyecto General
- [x] `.gitignore` - Contiene node_modules, .env, dist, build
- [x] `.env.example` - Creado con template de variables
- [x] `DEPLOY_RAPIDO.md` - Guía rápida de deployment
- [x] `DEPLOYMENT_VERCEL.md` - Guía detallada de deployment

---

## 🔧 Requisitos Externos

### Vercel
- [ ] Crear cuenta en https://vercel.com (gratuita)
- [ ] Instalar Vercel CLI: `npm install -g vercel`
- [ ] Estar logueado: `vercel login`

### GitHub
- [ ] Crear repositorio en GitHub: https://github.com/new
- [ ] Hacer push de código local:
  ```powershell
  git init
  git add .
  git commit -m "Initial commit"
  git branch -M main
  git remote add origin https://github.com/TU_USER/biblioteca.git
  git push -u origin main
  ```

### MongoDB Atlas
- [ ] Base de datos creada y accesible
- [ ] Usuario creado con contraseña
- [ ] Network Access: Whitelist 0.0.0.0/0 (permitir todos para Vercel)
- [ ] Cluster URL: `mongodb+srv://biblioteca:dW1OqGGBz4E9k5lH@cluster0.t2wrxn9.mongodb.net/biblioteca`

---

## 🚀 Orden de Deployment

1. **Backend primero** (necesita estar corriendo para que frontends lo usen)
   ```powershell
   cd backend
   vercel --prod
   ```
   - Guardar URL: `https://biblioteca-api.vercel.app`

2. **Configurar variables de entorno** del backend en Vercel Dashboard
   - `MONGODB_URI`
   - `NODE_ENV=production`
   - Redeploy

3. **Frontend Angular**
   ```powershell
   cd ..\frontend-angular
   vercel --prod
   ```

4. **Frontend React**
   ```powershell
   cd ..\frontend-react
   vercel --prod
   ```

---

## 🧪 Tests Pre-Deploy

### Backend Local
```powershell
cd backend
npm start
# Verificar: http://localhost:3000/api/v1 devuelve JSON
```

### Frontend Angular Local
```powershell
cd frontend-angular
ng build --configuration production
# Verificar: dist/biblioteca-angular/index.html existe
```

### Frontend React Local
```powershell
cd frontend-react
npm run build
# Verificar: dist/index.html existe
```

---

## ⚠️ Cosas Críticas Que No Olvidar

1. **MONGODB_URI en Vercel Dashboard**
   - No guardar en código, solo en variables de entorno
   - Verificar que la URL es correcta (copy-paste desde Atlas)

2. **CORS Settings**
   - Verificar que URLs de Vercel están en `allowedOrigins` en `backend/src/app.js`
   - Cambiar según tus URLs reales de Vercel

3. **Environment Variables**
   - Angular: `environment.prod.ts` debe apuntar a URL de backend en Vercel
   - React: `.env.production` debe tener VITE_API_URL correcto

4. **Build Commands Correctos**
   - Angular: `npm run build` (debe ser `ng build`)
   - React: `npm run build` (debe ser `vite build`)

5. **Output Directories Correctos**
   - Angular: `dist/biblioteca-angular`
   - React: `dist`

---

## 📊 Verificación Post-Deploy

### URLs Esperadas
- [ ] `https://biblioteca-api.vercel.app/api/v1` - Devuelve JSON
- [ ] `https://biblioteca-angular.vercel.app` - Carga sin errores
- [ ] `https://biblioteca-react.vercel.app` - Carga sin errores

### Funcionalidad
- [ ] Angular muestra lista de libros
- [ ] React muestra lista de libros
- [ ] Ambos frontends pueden crear/editar/eliminar libros

### Logs
- [ ] Sin errores en Vercel Dashboard
- [ ] MongoDB conecta correctamente
- [ ] Requests llegan al backend

---

## 🆘 Contactos y Recursos

- Vercel Docs: https://vercel.com/docs
- Vercel CLI: https://vercel.com/docs/cli
- Next.js + Vercel: https://vercel.com/guides/next-js
- MongoDB Atlas: https://docs.atlas.mongodb.com

---

**Última actualización:** 16 de febrero de 2026
**Estado:** ✅ Listo para deployment

