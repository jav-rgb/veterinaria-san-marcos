import React from "react";
import Boton from "../atoms/Boton";

function TarjetaServicio({
  titulo,
  descripcion,
  precio,
  onSeleccionar,
}) {
  return (
    <div className="tarjeta-servicio">
      <h2>{titulo}</h2>

      <p>{descripcion}</p>

      <p>
        <strong>Precio:</strong> ${precio}
      </p>

      <Boton onClick={onSeleccionar}>
        Seleccionar
      </Boton>
    </div>
  );
}

export default TarjetaServicio;
