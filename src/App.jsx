import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./componentes/Formulario";

function App() {
  return (
    <>
      <header className="sombra py-3">
        <h1 className="text-center text-info">CLIMA</h1>
      </header>
      <main>
        <Formulario></Formulario>
      </main>
      <footer className="text-center text-light bg-black py-1 sombra">
        <p>
          By{" "}
          <a
            href="https://github.com/KR3RULIE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-danger"
          >
            KR3RULIE
          </a>
        </p>
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
