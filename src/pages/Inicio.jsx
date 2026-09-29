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

        <Link to="/login">
          Iniciar sesión
        </Link>
      </header>

      <main>
        <h2>Nuestros servicios</h2>

        {servicios && servicios.length > 0 ? (
          <div>
            {servicios.map((servicio) => (
              <TarjetaServicio
                key={servicio.id}
                titulo={servicio.titulo}
                descripcion={servicio.descripcion}
                precio={servicio.precio}
                onSeleccionar={() => {
                  console.log("Servicio seleccionado:", servicio);
                }}
              />
            ))}
          </div>
        ) : (
          <p>No hay servicios disponibles.</p>
        )}
      </main>
    </div>
  );
}

export default Inicio;
