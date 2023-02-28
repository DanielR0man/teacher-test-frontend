import React from "react";
import "../styles/home.css";

function Home() {
  return (
    <div
      id="home"
      className="m-0 vh-100 row justify-content-center align-items-center"
    >
      <div id="login-card" className="col-auto p-5 w-25 rounded">
        <header className="d-flex justify-content-center rounded text-white bg-danger mb-3">
          <h2>SEADoc</h2>
        </header>

        <div className="d-flex flex-column">
          <p className="align-self-center">
            Ingresa tus datos para iniciar sesión
          </p>

          <form action="" className="d-flex flex-column form-floating">
            <div className="form-group">
              <input
                placeholder="Código"
                type="text"
                id="codigo"
                className="form-control mt-1 rounded"
              />
              <input
                placeholder="Documento"
                type="text"
                id="documento"
                className="form-control mt-2 rounded"
              />
              <input
                placeholder="Contraseña"
                type="password"
                id="password"
                className="form-control mt-2 rounded"
              />
            </div>
            <button className="btn btn-danger mt-4">Iniciar Sesión</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
