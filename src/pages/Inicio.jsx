import React from "react";
import { Link } from "react-router-dom";
import { useProductos } from "../context/ProductosContext";
import TarjetaServicio from "../components/molecules/TarjetaServicio";

function Inicio() {
  const { servicios } = useProductos();

  return (
    <div>
      <header>
        <h1>Servicios</h1>

        <div>
          <Link to="/login">
            Iniciar sesión
          </Link>

          {" | "}

          <Link to="/agregar-servicio">
            Agregar servicio
          </Link>
        </div>
      </header>

      <main>
        <h2>Lista de servicios</h2>

        {servicios && servicios.length > 0 ? (
          <div>
            {servicios.map((servicio) => (
              <TarjetaServicio
                key={servicio.id || servicio.codigo}
                titulo={servicio.nombre}
                descripcion={
                  servicio.descripcion ||
                  servicio.observaciones ||
                  "Sin descripción"
                }
                precio={servicio.precio}
                onSeleccionar={() =>
                  console.log("Servicio seleccionado:", servicio)
                }
              />
            ))}
          </div>
        ) : (
          <p>No hay servicios registrados.</p>
        )}
      </main>
    </div>
  );
}

export default Inicio;