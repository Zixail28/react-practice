import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../../components/Layout';

import { Pnf } from '../../pages/404page';
import { Home } from '../../pages/Homepage';
import { About } from '../../pages/Aboutus';
import { Forms } from '../../pages/Forms';

function App(): JSX.Element {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="forms" element={<Forms />} />
            <Route path="about-us" element={<About />} />
            <Route path="*" element={<Pnf />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
