# ⚡ Guía Rápida: Deploy en Vercel (5 pasos)

## Paso 1: Instalar Vercel CLI
```powershell
npm install -g vercel
```

## Paso 2: Hacer push a GitHub

```powershell
cd C:\Users\Alumno1\IdeaProjects\Biblioteca

# Si no has hecho git init:
git init
git add .
git commit -m "Deploy a Vercel"
git branch -M main

# Crear repo en https://github.com/new, luego:
git remote add origin https://github.com/TU_USER/biblioteca.git
git push -u origin main
```

## Paso 3: Desplegar Backend

```powershell
cd backend
vercel --prod
```

**Durante el deploy:**
- Selecciona: "Link to existing project?" → **No**
- Project name: `biblioteca-api`
- Directory: `./`

**Guarda la URL resultante, ejemplo:** `https://biblioteca-api.vercel.app`

## Paso 4: Configurar variables de entorno en Vercel

Opción fácil via Dashboard:
1. Ir a https://vercel.com/dashboard
2. Seleccionar `biblioteca-api`
3. Settings → Environment Variables
4. Agregar:
   ```
   MONGODB_URI = mongodb+srv://biblioteca:dW1OqGGBz4E9k5lH@cluster0.t2wrxn9.mongodb.net/biblioteca?retryWrites=true&w=majority
   NODE_ENV = production
   ```
5. Redeploy: Dashboard → Deployments → Seleccionar último → Redeploy

## Paso 5: Desplegar Frontends

### Angular:
```powershell
cd ..\frontend-angular

# Editar environment.prod.ts:
# apiUrl: 'https://biblioteca-api.vercel.app/api/v1'

vercel --prod
```

### React:
```powershell
cd ..\frontend-react

# Crear/editar .env.production:
# VITE_API_URL=https://biblioteca-api.vercel.app/api/v1

vercel --prod
```

---

## ✅ Verificación

Después del deploy, abre en el navegador:
- Backend: https://biblioteca-api.vercel.app/api/v1
- Angular: https://biblioteca-angular.vercel.app
- React: https://biblioteca-react.vercel.app

Deberías ver:
- ✅ Backend devuelve JSON con endpoints
- ✅ Angular muestra lista de libros
- ✅ React muestra lista de libros

---

## 🐛 Si algo falla:

### Backend no carga libros:
1. Verificar MONGODB_URI en Vercel Dashboard
2. En MongoDB Atlas: Network Access → Allow access from anywhere (0.0.0.0/0)

### CORS error:
- Vercel URLs ya están en la lista blanca de CORS en `backend/src/app.js`

### Build falla:
```powershell
# Ver logs:
vercel logs biblioteca-api
```

---

## 📚 Documentación Completa

Ver `DEPLOYMENT_VERCEL.md` para guía detallada.

¡Listo! 🚀

