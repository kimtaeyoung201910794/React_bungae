
import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Brand from './component/Brand';
import Main from './component/Main';

const App = () => {
  return (
    <div>
      <BrowserView>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Brand />} />
          <Route path="MainPage" element={<Main />} />
        </Routes>
      </BrowserRouter>
      </BrowserView>
      <MobileView>
        모바일 브라우저
      </MobileView>
    </div>
  );
}

export default App;
