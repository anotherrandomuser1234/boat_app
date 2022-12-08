import { Route, Routes } from "react-router-dom";
import BoatPage from './pages/BoatPage';
import LoginPage from './pages/LoginPage';
import BoatDetailPage from './pages/BoatDetailPage';

function App() {
  const title = "Boat App";
  return (
    <div className="App">
      <h1>{title}</h1>
      <Routes>
        <Route path='/' element={< LoginPage />}></Route>
        <Route path='/boats' element={< BoatPage />}></Route>
        <Route path='/boats/:id' element={< BoatDetailPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
