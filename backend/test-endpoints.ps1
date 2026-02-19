# Script de prueba de endpoints de la API Biblioteca
# Asegúrate de tener el servidor corriendo antes de ejecutar este script
# Ejecutar: npm start (en otra terminal)

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  PRUEBA DE ENDPOINTS - BIBLIOTECA API" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

$baseUrl = "http://localhost:3000"
$testsPassed = 0
$testsFailed = 0

# Función auxiliar para hacer peticiones
function Test-Endpoint {
    param(
        [string]$Method,
        [string]$Url,
        [string]$Description,
        [object]$Body = $null
    )

    Write-Host "`n📍 Testing: $Description" -ForegroundColor Yellow
    Write-Host "   Method: $Method $Url" -ForegroundColor Gray

    try {
        $params = @{
            Uri = $Url
            Method = $Method
            TimeoutSec = 10
        }

        if ($Body) {
            $params.Body = ($Body | ConvertTo-Json)
            $params.ContentType = "application/json"
        }

        $response = Invoke-RestMethod @params

        Write-Host "   ✅ SUCCESS - Status: 200" -ForegroundColor Green
        Write-Host "   Response: $($response | ConvertTo-Json -Compress -Depth 3)" -ForegroundColor Gray

        $script:testsPassed++
        return $response
    }
    catch {
        Write-Host "   ❌ FAILED - Error: $($_.Exception.Message)" -ForegroundColor Red
        $script:testsFailed++
        return $null
    }
}

# ========================================
# 1. ENDPOINT RAÍZ
# ========================================
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "1. DOCUMENTACIÓN" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

Test-Endpoint -Method "GET" -Url "$baseUrl/" -Description "Root - Documentación general"
Test-Endpoint -Method "GET" -Url "$baseUrl/api/v1" -Description "API v1 - Documentación"
Test-Endpoint -Method "GET" -Url "$baseUrl/health" -Description "Health Check"

# ========================================
# 2. LISTAR LIBROS
# ========================================
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "2. LISTAR LIBROS (GET)" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

$libros = Test-Endpoint -Method "GET" -Url "$baseUrl/api/v1/libros/get/all" -Description "Listar todos los libros (sin parámetros)"
Test-Endpoint -Method "GET" -Url "$baseUrl/api/v1/libros/get/all?page=1&limit=5" -Description "Listar libros con paginación"
Test-Endpoint -Method "GET" -Url "$baseUrl/api/v1/libros/get/all?genero=ficción" -Description "Filtrar por género: ficción"
Test-Endpoint -Method "GET" -Url "$baseUrl/api/v1/libros/get/all?disponible=true" -Description "Filtrar por disponibilidad"
Test-Endpoint -Method "GET" -Url "$baseUrl/api/v1/libros/get/all?search=hobbit" -Description "Buscar por título: hobbit"
Test-Endpoint -Method "GET" -Url "$baseUrl/api/v1/libros/get/all?autor=Tolkien" -Description "Buscar por autor: Tolkien"

# ========================================
# 3. OBTENER LIBRO POR ID
# ========================================
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "3. OBTENER LIBRO POR ID (GET)" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

if ($libros -and $libros.data -and $libros.data.Count -gt 0) {
    $libroId = $libros.data[0]._id
    Write-Host "   Usando ID del primer libro: $libroId" -ForegroundColor Gray
    Test-Endpoint -Method "GET" -Url "$baseUrl/api/v1/libros/get/$libroId" -Description "Obtener libro por ID válido"
} else {
    Write-Host "   ⚠️  No hay libros disponibles para probar este endpoint" -ForegroundColor Yellow
}

Test-Endpoint -Method "GET" -Url "$baseUrl/api/v1/libros/get/507f1f77bcf86cd799439011" -Description "Obtener libro por ID inexistente (debe dar 404)"

# ========================================
# 4. CREAR LIBRO
# ========================================
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "4. CREAR LIBRO (POST)" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

$nuevoLibro = @{
    isbn = "9780000000001"
    titulo = "Libro de Prueba - Script Automático"
    autor = "Autor de Prueba"
    editorial = "Editorial Test"
    anioPublicacion = 2026
    generos = @("ficción", "novela")
    numeroPaginas = 250
    descripcion = "Este es un libro de prueba creado por el script de testing automático"
    idioma = "español"
    precio = 19.99
    stock = 5
    disponible = $true
    portada = "https://via.placeholder.com/300x400"
}

$libroCreado = Test-Endpoint -Method "POST" -Url "$baseUrl/api/v1/libros/post" -Description "Crear nuevo libro" -Body $nuevoLibro

# ========================================
# 5. ACTUALIZAR LIBRO
# ========================================
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "5. ACTUALIZAR LIBRO (PATCH)" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

if ($libroCreado -and $libroCreado.data) {
    $libroIdCreado = $libroCreado.data._id
    Write-Host "   Usando ID del libro creado: $libroIdCreado" -ForegroundColor Gray

    $actualizacion = @{
        titulo = "Libro de Prueba - ACTUALIZADO"
        precio = 24.99
        stock = 10
    }

    Test-Endpoint -Method "PATCH" -Url "$baseUrl/api/v1/libros/update/$libroIdCreado" -Description "Actualizar libro creado" -Body $actualizacion
} else {
    Write-Host "   ⚠️  No se pudo crear un libro para actualizar" -ForegroundColor Yellow
}

# ========================================
# 6. ELIMINAR LIBRO
# ========================================
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "6. ELIMINAR LIBRO (DELETE)" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

if ($libroCreado -and $libroCreado.data) {
    $libroIdCreado = $libroCreado.data._id
    Write-Host "   Usando ID del libro creado: $libroIdCreado" -ForegroundColor Gray

    Test-Endpoint -Method "DELETE" -Url "$baseUrl/api/v1/libros/delete/$libroIdCreado" -Description "Eliminar libro creado"
} else {
    Write-Host "   ⚠️  No se pudo crear un libro para eliminar" -ForegroundColor Yellow
}

# ========================================
# 7. VALIDACIONES Y ERRORES
# ========================================
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "7. PROBAR VALIDACIONES" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

$libroInvalido = @{
    isbn = "123"  # ISBN inválido
    titulo = "X"  # Título muy corto
}

Test-Endpoint -Method "POST" -Url "$baseUrl/api/v1/libros/post" -Description "Crear libro con datos inválidos (debe dar 400)" -Body $libroInvalido

# Intentar crear libro con ISBN duplicado
if ($libros -and $libros.data -and $libros.data.Count -gt 0) {
    $isbnExistente = $libros.data[0].isbn
    $libroDuplicado = @{
        isbn = $isbnExistente
        titulo = "Libro Duplicado"
        autor = "Autor Test"
        editorial = "Editorial Test"
        anioPublicacion = 2026
        generos = @("ficción")
        numeroPaginas = 200
        descripcion = "Intento de duplicar ISBN"
        precio = 15.99
    }

    Test-Endpoint -Method "POST" -Url "$baseUrl/api/v1/libros/post" -Description "Crear libro con ISBN duplicado (debe dar 409)" -Body $libroDuplicado
}

# ========================================
# RESUMEN FINAL
# ========================================
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  RESUMEN DE PRUEBAS" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

$totalTests = $testsPassed + $testsFailed

Write-Host "`n✅ Pruebas exitosas: $testsPassed / $totalTests" -ForegroundColor Green
Write-Host "❌ Pruebas fallidas: $testsFailed / $totalTests" -ForegroundColor Red

if ($testsFailed -eq 0) {
    Write-Host "`n🎉 ¡Todos los endpoints funcionan correctamente!" -ForegroundColor Green
} elseif ($testsPassed -gt 0) {
    Write-Host "`n⚠️  Algunos endpoints tienen problemas. Revisa los errores arriba." -ForegroundColor Yellow
} else {
    Write-Host "`n❌ El servidor no está respondiendo. Asegúrate de que esté corriendo en el puerto 3000." -ForegroundColor Red
}

Write-Host "`n========================================`n" -ForegroundColor Cyan

