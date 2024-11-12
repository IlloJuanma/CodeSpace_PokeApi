# Pokedex App

Este proyecto es una práctica del bootcamp de CodeSpace. La aplicación utiliza la [PokeAPI](https://pokeapi.co/) para mostrar información sobre los Pokémon en pantalla de forma interactiva.

## Descripción

La aplicación permite al usuario ver detalles sobre un Pokémon al hacer clic en su imagen. Al seleccionar un Pokémon, la aplicación muestra:
- Nombre
- Imagen
- Altura
- Peso
- Tipos

La funcionalidad principal se basa en la comunicación con la PokeAPI para obtener los datos en formato JSON, procesarlos y mostrarlos dinámicamente en el DOM.

## Tecnologías

- **JavaScript**: para manejar la lógica y manipulación del DOM.
- **HTML y CSS**: para la estructura y el diseño de la aplicación.
- **API**: uso de la API pública de [PokeAPI](https://pokeapi.co/) para obtener la información de los Pokémon.

## Funcionalidades

1. **Fetch de datos de la API**: realiza peticiones asíncronas a la PokeAPI usando `fetch` y `async/await`.
2. **Interacción**: permite al usuario hacer clic en imágenes de Pokémon para ver sus detalles.
3. **Visualización dinámica**: muestra en la pantalla los detalles de cada Pokémon seleccionado, incluyendo su nombre, altura, peso y tipos.

## Estructura del Código

- `getPokemon`: función asíncrona que obtiene los datos de un Pokémon desde la API.
- `displayPokemon`: función para actualizar el DOM con los datos obtenidos.
- Manejadores de eventos en los elementos de imagen de Pokémon que permiten la interacción.

## GitHub Pages

- Visualización: https://illojuanma.github.io/CodeSpace_PokeApi/