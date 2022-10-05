import './style/App.css';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
//import About from './pages/About/About.jsx';
//import FicheLogement from './pages/FicheLogement/FicheLogement.jsx';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
  );
}

export default App;
