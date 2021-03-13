# Crear una tabla de swapi

Primero, clona el repositorio desde [swapi-table](https://github.com/hackatonsForDummies/swapi-table.git)

## Crea la aplicacion

Utiliza el comando `npx create-react-app swapi-table` 

### Inicializa

Utiliza `npm start` para lanzar el servidor

### Instalar dependencias

Usar el comando `npm i axios react-bootstrap bootstrap`
para instalar las dependencias necesarias:

Axios: Modulo http.
React-bootstrap: Componentes de bootstrap

### Recibir los datos 

Crear servicio con Axios para recibir los datos.

Desde el componente llamar al servicio dentro de
useEffect y guardar en useState

### Pintar los datos

Crear una tabla y una fila para cada uno de
los elementos del state con un bucle
