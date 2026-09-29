import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import AgregarServicio from "./pages/AgregarServicio";
import { ProductosProvider } from "./context/ProductosContext";

function App() {
  return (
    <BrowserRouter>
      <ProductosProvider>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/agregar-servicio"
            element={<AgregarServicio />}
          />
        </Routes>
      </ProductosProvider>
    </BrowserRouter>
  );
}

export default App;