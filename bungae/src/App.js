
import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Brand from './page/Brand';
import Main from './page/Main';
import About from './page/About';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Brand />} />
          <Route path="MainPage" element={<Main />} />
          <Route path="AboutPage" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
