import { serviciosVeterinaria } from '../data/productosData';

const CLAVE_STORAGE = 'servicios_veterinaria';

export const obtenerServicios = () => {
  const datos = localStorage.getItem(CLAVE_STORAGE);
  if (!datos) {
    localStorage.setItem(CLAVE_STORAGE, JSON.stringify(serviciosVeterinaria));
    return serviciosVeterinaria;
  }
  return JSON.parse(datos);
};

export const guardarServicio = (nuevoServicio) => {
  const servicios = obtenerServicios();
  const serviciosActualizados = [...servicios, { ...nuevoServicio, id: Date.now() }];
  localStorage.setItem(CLAVE_STORAGE, JSON.stringify(serviciosActualizados));
  return serviciosActualizados;
};