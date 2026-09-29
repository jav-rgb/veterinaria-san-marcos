import React from "react";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div>
      <h1>Bienvenido</h1>

      <p>Esta es la página de inicio.</p>

      <Link to="/login">
        Ir al Login
      </Link>
    </div>
  );
}

export default Inicio;