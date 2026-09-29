import React from "react";

function CampoTexto({
  label,
  name,
  tipo = "text",
  placeholder,
  valor,
  onChange,
}) {
  return (
    <div>
      <label htmlFor={name}>
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={tipo}
        placeholder={placeholder}
        value={valor}
        onChange={onChange}
      />
    </div>
  );
}

export default CampoTexto;