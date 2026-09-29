import React, { createContext, useState, useEffect, useContext } from 'react';
import { obtenerServicios, guardarServicio } from '../services/productoService';

const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    const datos = obtenerServicios();
    setServicios(datos);
  }, []);

  const agregarServicio = (nuevoServicio) => {
    const actualizados = guardarServicio(nuevoServicio);
    setServicios(actualizados);
  };

  return (
    
      {children}
    
  );
};

export const useProductos = () => useContext(ProductosContext);