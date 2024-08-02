import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from 'react';
import Homepage from './HomePage';
import Login from './Login';
import Mainpage from "./MainPage";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mainpage" element={<Mainpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App