import React from 'react';

import Nav from './nav';


const MainPanel = () => (
  <div className="col-8">
    <div className="container p-4">
      <div className="row">
        <div className="col-6 text-left">
          <h1>Películas</h1>
        </div>
        <div className="col-6 text-right">
          <button className="btn btn-success" type="button">Crear Nueva Pelicula</button>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <label htmlFor="date-select">
            Seleccionar Fecha:
            <input type="date"/>
          </label>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          Movies List
        </div>
      </div>

    </div>
  </div>
);

export default MainPanel;