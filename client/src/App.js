import './App.css';
import Nav from './components/nav/Nav.jsx';
import Footer from './components/footer/Footer.jsx';
import Inicio from './components/inicio/Inicio';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/inicio' element={<Inicio />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
