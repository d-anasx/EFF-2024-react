import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Evenement from './Evenement';
import Formulaire from './Formulaire';
import Experts2 from './Experts2';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Evenement />} />
          <Route path="/evenement" element={<Evenement />} />
          <Route path="/formulaire" element={<Formulaire />} />
          <Route path="/experts2" element={<Experts2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

