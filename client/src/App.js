import './App.css';
import Nav from './components/nav/Nav.jsx';
import Footer from './components/footer/Footer.jsx';
import Inicio from './components/inicio/Inicio';
import { Route, Routes } from 'react-router-dom';
import Detalles from './components/detalles/Detalles';
import CreateDog from './components/createDog/CreateDog';
import ErrorPage from './components/errors/ErrorPage';
import Landing from './components/landing/Landing';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/detalle/:idRaza' element={<Detalles />} />
        <Route path='/administracion' element={<CreateDog />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/' element={<Landing />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
