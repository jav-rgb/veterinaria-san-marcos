import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CampoTexto from "../components/atoms/CampoTexto";
import Boton from "../components/atoms/Boton";

function Login() {
  const navigate = useNavigate();

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!correo || !password) {
      alert("Por favor completa todos los campos.");
      return;
    }

    alert("Inicio de sesión exitoso");
    navigate("/");
  };

  return (
    <div>
      <h1>Iniciar sesión</h1>

      <form onSubmit={handleSubmit}>
        <CampoTexto
          label="Correo electrónico"
          name="correo"
          tipo="email"
          placeholder="Ingresa tu correo"
          valor={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <CampoTexto
          label="Contraseña"
          name="password"
          tipo="password"
          placeholder="Ingresa tu contraseña"
          valor={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Boton type="submit">
          Iniciar sesión
        </Boton>
      </form>

      <p>
        ¿No tienes una cuenta?{" "}
        <Link to="/">
          Volver al inicio
        </Link>
      </p>
    </div>
  );
}

export default Login;
