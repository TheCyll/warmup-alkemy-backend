# Reto de calentamiento para aceleración Alkemy

Este es un reto backend para la primer semana de la aceleración en Alkemy.

## El reto es el siguiente: 

Deberás desarrollar una API para un blog, utilizando Node y Express. 
Los datos deberán ser persistidos en una base de datos MySQL, utilizando Sequelize. 
Esta API deberá devolver datos en formato JSON.

Cada post deberá contener los siguientes campos:
- ID
- Título 
- Contenido 
- Imagen
- Categoría
- Fecha de creación


Los endpoints que deberá exponer la API son:

### **GET /posts**  

Deberá mostrar un listado de posts, ordenados por fecha de creación, en forma descendente. Este listado deberá mostrar solamente los campos ID, título, imagen, categoría y fecha de creación.

### **GET /posts/:id**  

Deberá buscar un post cuyo id sea el especificado en el parámetro :id. Si existe, devolver sus detalles, caso contrario devolver un mensaje de error.

### **POST /posts**  

Deberá guardar un nuevo post según los datos recibidos en la petición.

### **PATCH /posts/:id**  

Deberá actualizar el post con el id especificado en el parámetro :id, y actualizar sus datos según el cuerpo de la petición. En el caso de que no exista, devolver un mensaje de error.

### **DELETE /posts/:id**  

Deberá eliminar el post con el id especificado en el parámetro :id. En el caso de que no exista, devolver un mensaje de error.

## Consideraciones
Se evaluará la correcta estructuración de los archivos, buena escritura del código.
De forma adicional, puede crearse una tabla adicional para las categorías y relacionar las mismas a través de una clave foránea en cada post.
El campo imagen debe ser la URL de una imagen, no es necesario estructurar una lógica de almacenamiento de archivos, puede ser una referencia hacia un sitio externo (es un bonus validar que la URL corresponda una imagen, por ejemplo, que finalice en .png, jpg, o comprobar la existencia del recurso antes de almacenarlo)


