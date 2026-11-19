# 🌮 Taquería El Buen Taco

Plantilla de sitio estático para GitHub Pages. **Nombre, ubicación, horarios y precios son ejemplos** y deben personalizarse.

## Archivos
- `index.html`: estructura y textos.
- `styles.css`: colores, tipografías y diseño adaptable.
- `script.js`: productos, precios, filtros y WhatsApp.

## Probar localmente
Abre `index.html` en tu navegador. Requiere Internet para descargar las fuentes de Google Fonts; sin conexión usará Arial.

## Publicar con Git Bash
1. Crea en GitHub un repositorio **público** llamado `taqueria-el-buen-taco` sin generar un README inicial.
2. Extrae la carpeta de este ZIP en tu PC y abre **Git Bash** dentro de ella (clic derecho → Open Git Bash here, si aparece).
3. Ejecuta (reemplaza `TU_USUARIO`):

```bash
git init
git branch -M main
git add .
git commit -m "Crear sitio inicial de la taquería"
git remote add origin https://github.com/TU_USUARIO/taqueria-el-buen-taco.git
git push -u origin main
```

4. En GitHub: **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save**.
5. Consulta `https://TU_USUARIO.github.io/taqueria-el-buen-taco/` (la primera publicación puede tardar unos minutos).

GitHub puede solicitar que inicies sesión en una ventana del navegador para autorizar la operación. No pegues tu contraseña en Git Bash. Si ya creaste un repositorio con archivos iniciales (como README), es mejor clonarlo primero en lugar de seguir estos comandos sin ajustes.

## Actualizar el sitio
Tras editar, desde la carpeta del proyecto:

```bash
git add .
git commit -m "Actualizar menú y precios"
git push
```

## Qué personalizar
- `index.html`: marca, descripción, dirección y horario.
- `script.js`: arreglo `productos` y variable `whatsappNumero`.
- `styles.css`: variables de color al inicio.

**Advertencia:** GitHub Pages publica un sitio público, no admite un backend de pedidos o pagos por sí solo. El botón WhatsApp se activa únicamente al introducir un número válido; por defecto muestra un aviso de configuración.
