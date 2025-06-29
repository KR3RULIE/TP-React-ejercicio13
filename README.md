# Aplicación de Consulta de Clima

## Descripción

Esta aplicación web permite consultar el clima actual de una ciudad y país ingresados por el usuario. Utiliza la API de [OpenWeatherMap](https://openweathermap.org/) para obtener datos reales del clima, incluyendo temperatura, humedad, viento y condiciones climáticas.

---

## Funcionalidades

- Ingresar una ciudad y un país para consultar su clima actual.
- Mostrar temperatura actual, mínima, máxima, humedad, descripción del clima y velocidad del viento.
- Validar que se ingresen ambos campos antes de realizar la consulta.
- Mostrar mensaje de error si la ciudad no existe o no se encuentran datos.

---

## Tecnologías utilizadas

- React.js
- React Bootstrap para estilos y componentes visuales
- API OpenWeatherMap para datos meteorológicos

---

## Uso

1. Clonar el repositorio.
2. Instalar dependencias con `npm install`.
3. Iniciar la aplicación con `npm run dev`.
4. Ingresar la ciudad y el país (código ISO, por ejemplo `AR` para Argentina).
5. Presionar el botón **Consultar** para ver el clima.

---

## Autor

Marcos Joel Tebis

---

## Notas

- La API Key utilizada debe ser válida para que funcione la consulta al clima.
- El campo país debe ingresarse con el código ISO de dos letras (por ejemplo, `AR` para Argentina).
- En caso de ciudad no encontrada, se muestra un mensaje de error.