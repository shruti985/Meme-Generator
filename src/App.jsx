import Home from './pages/Home'
import Meme from './pages/Meme';
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editmeme" element={<Meme/>} />
      </Routes>
    </>
  );
}

export default App
