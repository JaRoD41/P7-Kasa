import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import FicheLogement from './pages/FicheLogement/FicheLogement.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logements/:id" element={<FicheLogement />} />
      </Routes>
    </div>
  );
}

export default App;
