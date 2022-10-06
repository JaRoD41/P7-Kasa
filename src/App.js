import './style/App.css';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './components/Header';
import FicheLogement from './pages/FicheLogement/FicheLogement';

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<FicheLogement />} />
        </Routes>
      </div>
  );
}

export default App;
