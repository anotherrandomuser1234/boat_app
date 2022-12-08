import { Button, Input } from '@mui/material';
import { useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import BoatPage from './pages/BoatPage';
import LoginPage from './pages/LoginPage';

function App() {
  const title = "Boat App";
  return (
    <div className="App">
      <h1>{title}</h1>
      <Routes>
        <Route path='/' element={< LoginPage />}></Route>
        <Route path='/boats' element={< BoatPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
