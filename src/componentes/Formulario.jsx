import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import ListaClima from "./ListaClima";

const Formulario = () => {
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");
  const [clima, setClima] = useState({});
  const API_KEY = "13d8d14a31e3e44c55a7993cbb769ce4";

  const consultarClima = async () => {
    if (ciudad.trim() === "" || pais.trim() === "") {
      alert("Por favor, ingresa ciudad y país");
      return;
    }
    try {
      const respuesta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${API_KEY}&units=metric&lang=es`
      );
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        console.log(datos);
        setClima(datos);
      }
    } catch (error) {
      alert(error.message);
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
