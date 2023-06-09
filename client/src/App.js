import './App.css';
import Nav from './components/nav/Nav.jsx';
import Footer from './components/footer/Footer.jsx';
import Inicio from './components/inicio/Inicio';
import { Route, Routes, useLocation } from 'react-router-dom';
import Detalles from './components/detalles/Detalles';
import CreateDog from './components/createDog/CreateDog';
import ErrorPage from './components/errors/ErrorPage';
import Landing from './components/landing/Landing';

function App() {
  const location = useLocation()
  return (
    <div className="App">

      {(location.pathname === '/') ? null : <Nav />}
      <Routes>
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/detalle/:idRaza' element={<Detalles />} />
        <Route path='/administracion' element={<CreateDog />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/' element={<Landing />} />

      </Routes>
      {(location.pathname === '/') ? null : <Footer />}
    </div>
  );
}

export default App;
