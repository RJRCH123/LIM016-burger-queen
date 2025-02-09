import React from 'react';
import {
  Input, Label, GrupoInput, LeyendaError,
} from './elementos';

function ComponenteInput({
  estado, cambiarEstado, tipo, label, placeholder, name, leyendaError, expresionRegular, funcion,
}) {
  const onChange = (e) => {
    cambiarEstado({ ...estado, campo: e.target.value });
  };

  const validacion = () => {
    if (expresionRegular) {
      if (expresionRegular.test(estado.campo)) {
        cambiarEstado({ ...estado, valido: 'true' });
      } else {
        // console.log(cambiarEstado);
        cambiarEstado({ ...estado, valido: 'false' });
      }
    }

    if (funcion) {
      funcion();
    }
  };

  return (
    <div>
      <Label htmlFor={name} valido={estado.valido}>{label}</Label>
      <GrupoInput>
        <Input
          type={tipo}
          placeholder={placeholder}
          id={name}
          value={estado.campo}
          onChange={onChange}
          onKeyUp={validacion}
          onBlur={validacion}
          valido={estado.valido}
        />
      </GrupoInput>
      <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
    </div>
  );
}

export default ComponenteInput;
