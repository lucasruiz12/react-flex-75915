# React + Vite - Serie de pasos

- Creamos nuestra carpeta y abrimos VSC desde ahí.
- Ejecutamos el comando `npm create vite`.
- Le ponemos nombre, seleccionamos la opción `react` y `JavaScript`.
- Tenemos dos opciones: podemos hacer cd nombreDelProyecto para acceder a esa carpeta desde la terminal o bien podemos tomar la carpeta creada y mover todos los archivos por fuera de la carpeta. Luego eliminarla (en caso de tomar esta segunda opción).
- Ejecutamos `npm install` y luego `npm run dev` para que el servidor corra en `http://localhost:5173/`. (Lo dejamos para el último. Primero eliminamos las cosas que no nos sirven)

## Archivos a eliminar (en la carpeta src)

- `index.css` se elimina.
- `App.css` se borra todo su contenido.
- En `main.jsx` quitamos StrictMode tanto en la línea 1 (importación) como en la etiqueta que envuelve al <App />. También quitamos la importación de `index.css` ya que este archivo no existe más.
- En `App.jsx` eliminamos casi todo. Lo único que vamos a dejar es el return y un h2.