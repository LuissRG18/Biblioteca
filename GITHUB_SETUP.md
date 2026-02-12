# 🚀 Guía para Subir el Proyecto a GitHub

## 📋 Prerrequisitos
✅ Git está instalado (versión 2.47.1)  
✅ Repositorio local inicializado  
✅ Commit inicial realizado  
✅ Archivos .gitignore configurados  

---

## 🔑 Paso 1: Crear el Repositorio en GitHub

1. **Ir a GitHub:** https://github.com
2. **Iniciar sesión** en tu cuenta
3. **Hacer clic en el botón "+"** en la esquina superior derecha
4. **Seleccionar "New repository"**
5. **Configurar el repositorio:**
   - **Repository name:** `biblioteca-mean-stack` (o el nombre que prefieras)
   - **Description:** `Sistema de Gestión de Biblioteca Full-Stack con MongoDB, Express, Angular y React`
   - **Visibilidad:** Public (o Private según tu preferencia)
   - **⚠️ IMPORTANTE:** NO inicialices con README, .gitignore, ni licencia (ya los tienes localmente)
6. **Hacer clic en "Create repository"**

---

## 🔗 Paso 2: Conectar tu Repositorio Local con GitHub

Después de crear el repositorio en GitHub, verás una página con instrucciones. Copia la URL del repositorio que se verá así:
```
https://github.com/TU_USUARIO/biblioteca-mean-stack.git
```

Luego ejecuta estos comandos en tu terminal (PowerShell):

```powershell
# Agregar el remote de GitHub
git remote add origin https://github.com/TU_USUARIO/biblioteca-mean-stack.git

# Verificar que el remote se agregó correctamente
git remote -v

# Renombrar la rama a main (si no lo está ya)
git branch -M main

# Subir el código a GitHub
git push -u origin main
```

---

## 🔐 Autenticación (Si es necesario)

Si GitHub te pide autenticación, tienes dos opciones:

### **Opción 1: Personal Access Token (Recomendado)**

1. Ve a GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token (classic)
3. Dale un nombre: "Biblioteca Project"
4. Selecciona el scope: **repo** (acceso completo a repositorios)
5. Genera el token y **cópialo** (solo lo verás una vez)
6. Cuando Git te pida password, usa el token en lugar de tu contraseña

### **Opción 2: GitHub CLI**

```powershell
# Instalar GitHub CLI (si no lo tienes)
winget install GitHub.cli

# Autenticarte
gh auth login

# Luego podrás hacer push sin problemas
```

---

## ✅ Paso 3: Verificar que se Subió Correctamente

1. Ve a tu repositorio en GitHub: `https://github.com/TU_USUARIO/biblioteca-mean-stack`
2. Deberías ver todos tus archivos y carpetas
3. Verifica que el README.md se muestre correctamente en la página principal

---

## 📦 Paso 4: Agregar Badges al README (Opcional pero Recomendado)

Puedes agregar badges al inicio de tu README.md para hacer el proyecto más profesional:

```markdown
# 📚 Biblioteca MEAN + Angular + React

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
```

---

## 🔄 Comandos Útiles para el Futuro

### Para subir cambios nuevos:
```powershell
# Ver qué archivos han cambiado
git status

# Agregar todos los cambios
git add .

# Hacer commit con un mensaje descriptivo
git commit -m "Descripción de los cambios"

# Subir a GitHub
git push
```

### Para ver el historial:
```powershell
# Ver commits
git log --oneline

# Ver cambios específicos
git log --oneline --graph --all
```

### Para crear ramas (branches):
```powershell
# Crear una nueva rama
git checkout -b nombre-de-la-rama

# Cambiar entre ramas
git checkout main
git checkout nombre-de-la-rama

# Subir una rama nueva a GitHub
git push -u origin nombre-de-la-rama
```

---

## 📝 Estructura Final en GitHub

Tu repositorio en GitHub debería tener esta estructura:

```
📁 biblioteca-mean-stack/
├── 📄 README.md (Documentación principal)
├── 📄 INICIO_RAPIDO.md
├── 📄 CHECKLIST_PROYECTO.md
├── 📄 RESUMEN_EJECUTIVO.md
├── 📄 PLAN_DE_ACCION.md
├── 📄 INFORME_FINAL.md
├── 📄 REACT_COMPLETADO.md
├── 📄 .gitignore
├── 📁 backend/
│   ├── 📄 package.json
│   ├── 📄 server.js
│   ├── 📄 MONGODB_SETUP.md
│   ├── 📄 API_TESTING.md
│   └── 📁 src/
├── 📁 frontend-react/
│   ├── 📄 README.md
│   ├── 📄 package.json
│   └── 📁 src/
└── 📁 frontend-angular/
    └── 📄 README.md
```

---

## 🎯 Consejos Adicionales

1. **Commits frecuentes:** Haz commits con mensajes descriptivos cada vez que completes una funcionalidad
2. **Branches para features:** Usa ramas separadas para nuevas características
3. **Pull requests:** Si trabajas en equipo, usa PRs para revisar código
4. **Issues:** Usa GitHub Issues para rastrear bugs y tareas pendientes
5. **GitHub Actions:** Considera configurar CI/CD en el futuro

---

## ⚠️ Archivos que NO se subirán (gracias al .gitignore)

- `node_modules/` (dependencias - se instalan con npm install)
- `.env` (variables de entorno - cada desarrollador debe crear el suyo)
- `dist/` (archivos compilados)
- Archivos del IDE (.idea, .vscode)
- Logs

---

## 🆘 Solución de Problemas

### Error: "remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/biblioteca-mean-stack.git
```

### Error: "failed to push some refs"
```powershell
# Si el repositorio remoto tiene commits que no tienes localmente
git pull origin main --rebase
git push -u origin main
```

### Error: "Authentication failed"
- Asegúrate de usar un Personal Access Token en lugar de tu contraseña
- O configura SSH keys en GitHub

---

## ✅ Checklist Final

- [ ] Repositorio creado en GitHub
- [ ] Remote agregado localmente
- [ ] Código subido con `git push`
- [ ] README se visualiza correctamente en GitHub
- [ ] Archivos sensibles NO están en el repositorio (verificar .env)
- [ ] Agregar descripción y tags al repositorio en GitHub
- [ ] (Opcional) Agregar badges al README
- [ ] (Opcional) Configurar GitHub Pages si quieres demo público

---

¡Listo! Tu proyecto ahora está en GitHub y puedes compartirlo con el mundo 🌎

