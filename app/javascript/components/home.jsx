import React from 'react';

import Nav from './nav';
import MainPanel from './mainPanel';

const Home = () => (
  <div className="container-fluid">
    <div className="row">
      <Nav />
      <MainPanel />
    </div>
  </div>
);

export default Home;
