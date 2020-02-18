import React from 'react';

import Nav from './nav';
import ReservasMainPanel from './reservasMain';

const Reservas = () => (
  <div className="container-fluid">
    <div className="row">
      <Nav />
      <ReservasMainPanel />
    </div>
  </div>
);

export default Reservas;
