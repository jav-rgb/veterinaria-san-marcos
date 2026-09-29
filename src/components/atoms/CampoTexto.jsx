import React from "react";

function CampoTexto({
  label,
  tipo = "text",
  placeholder,
  valor,
  onChange,
}) {
  return (
    <div>
      <label>
        {label}
      </label>

      <input
        type={tipo}
        placeholder={placeholder}
        value={valor}
        onChange={onChange}
      />
    </div>
  );
}

export default CampoTexto;