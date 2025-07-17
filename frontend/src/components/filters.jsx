import React from 'react';

function Filters({ 
  filtros,
  selectedEdicion,
  selectedTipo,
  selectedRaza,
  selectedSubRaza,
  selectedRareza,
  onChangeEdicion,
  onChangeTipo,
  onChangeRaza,
  onChangeSubRaza,
  onChangeRareza,
  onClearFilters
}) {
  return (
    <div id="filters">
      {/* Edición */}
      <select
        value={selectedEdicion}
        onChange={e => onChangeEdicion(e.target.value)}
      >
        <option value="">Edición</option>
        {filtros.ediciones.map(ed => (
          <option key={ed.id} value={ed.id}>
            {ed.nombre}
          </option>
        ))}
      </select>

      {/* Tipo */}
      <select
        value={selectedTipo}
        onChange={e => onChangeTipo(e.target.value)}
      >
        <option value="">Tipo</option>
        {filtros.tipos.map(tp => (
          <option key={tp.id} value={tp.id}>
            {tp.nombre}
          </option>
        ))}
      </select>

      {/* Raza */}
      <select
        value={selectedRaza}
        onChange={e => onChangeRaza(e.target.value)}
      >
        <option value="">Raza</option>
        {filtros.razas.map(rz => (
          <option key={rz.id} value={rz.id}>
            {rz.nombre}
          </option>
        ))}
      </select>

      {/* Sub-Raza */}
      <select
        multiple
        value={selectedSubRaza}
        onChange={e => {
          // Si es múltiple toma todas las opciones seleccionadas
          const values = Array.from(e.target.selectedOptions, opt => opt.value);
          onChangeSubRaza(values);
        }}
      >
        <option value="">Sub-Raza</option>
        {filtros.subRazas.map(sr => (
          <option key={sr.id} value={sr.id}>
            {sr.nombre}
          </option>
        ))}
      </select>

      {/* Rareza */}
      <select
        value={selectedRareza}
        onChange={e => onChangeRareza(e.target.value)}
      >
        <option value="">Rareza</option>
        {filtros.rarezas.map(r => (
          <option key={r.id} value={r.id}>
            {r.nombre}
          </option>
        ))}
      </select>

      {/* Botones */}
      <div style={{ marginTop: '0.5rem' }}>
        <button className="boton2" onClick={onClearFilters}>
          Limpiar filtros
        </button>
      </div>
    </div>
  );
}

export default Filters;
