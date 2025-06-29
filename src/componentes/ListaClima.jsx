const ListaClima = ({ clima }) => {
  if (clima === undefined || clima.main === undefined) {
    return <p className="text-center">No se encontraron datos aún</p>;
  }
  return (
    <section className="container bg-primary-subtle rounded text-center mt-3">
      <h3>
        Clima en {clima.name}, {clima.sys.country}
      </h3>
      <p>🌡️ Temperatura: {clima.main.temp} °C</p>
      <p>
        📉 Mín: {clima.main.temp_min} °C | 📈 Máx: {clima.main.temp_max} °C
      </p>
      <p>💧 Humedad: {clima.main.humidity}%</p>
      <p>
        🌤️ Condición:{" "}
        {clima.weather && clima.weather[0]
          ? clima.weather[0].description
          : "No disponible"}
      </p>
      <p>💨 Viento: {clima.wind.speed} m/s</p>
    </section>
  );
};

export default ListaClima;
