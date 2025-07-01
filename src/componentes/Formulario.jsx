import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import ListaClima from "./ListaClima";
import countries from "i18n-iso-countries";
import es from "i18n-iso-countries/langs/es.json";

const Formulario = () => {
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");
  const [clima, setClima] = useState({});
  const API_KEY = "13d8d14a31e3e44c55a7993cbb769ce4";
  countries.registerLocale(es);

  const consultarClima = async () => {
    const ciudadInput = ciudad.trim();
    const paisInputRaw = pais.trim();

    if (ciudadInput === "" || paisInputRaw === "") {
      alert("Por favor, ingresa una ciudad y un país.");
      return;
    }

    // Convertir nombre del país a código de país ISO-3166-1 alpha-2 (ej: "Argentina" → "AR")
    let paisCodigo = countries.getAlpha2Code(paisInputRaw, "es");

    // Si no se encuentra por nombre, asumimos que el usuario escribió el código directamente
    if (!paisCodigo && paisInputRaw.length === 2) {
      paisCodigo = paisInputRaw.toUpperCase();
    }

    if (!paisCodigo) {
      alert(
        "País no reconocido. Ingresá el nombre o código ISO válido (ej: AR, Argentina | PE, Perú)."
      );
      return;
    }

    try {
      const respuesta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudadInput},${paisCodigo}&appid=${API_KEY}&units=metric&lang=es`
      );

      const datos = await respuesta.json();

      if (respuesta.status === 200) {
        // Validar que el país en la respuesta coincida
        if (datos.sys.country !== paisCodigo) {
          alert(`La ciudad "${ciudadInput}" no pertenece al país ingresado.`);
          setClima({});
          return;
        }

        setClima(datos);
      } else {
        if (datos.message === "city not found") {
          alert("La ciudad no existe o no se encuentra en ese país.");
        } else {
          alert(`Error al consultar el clima: ${datos.message}`);
        }
        setClima({});
      }
    } catch (error) {
      alert("Ocurrió un error inesperado al consultar el clima.");
      setClima({});
    }
  };

  return (
    <>
      <section className="container bg-primary my-5 p-3 rounded">
        <Form>
          <Form.Group>
            <Form.Label className="fw-bold">Escribe el pais:</Form.Label>
            <Form.Control
              type="text"
              placeholder="AR = Argentina"
              value={pais}
              onChange={(e) => setPais(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Label className="fw-bold">Escribe la ciudad:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Buenos Aires"
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button variant="success" className="mt-3" onClick={consultarClima}>
            Consultar
          </Button>
        </Form>
      </section>
      <ListaClima clima={clima}></ListaClima>
    </>
  );
};

export default Formulario;
