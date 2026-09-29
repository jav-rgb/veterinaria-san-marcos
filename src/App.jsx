import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import { ProductosProvider } from "./context/ProductosContext";

function App() {
  return (
    <BrowserRouter>
      <ProductosProvider>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ProductosProvider>
    </BrowserRouter>
  );
}

export default App;
