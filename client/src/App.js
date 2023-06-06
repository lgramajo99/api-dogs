import './App.css';
import Nav from './components/nav/Nav.jsx';
import Footer from './components/footer/Footer.jsx';
import Inicio from './components/inicio/Inicio';
import { Route, Routes } from 'react-router-dom';
import Detalles from './components/detalles/Detalles';
import SearchBar from './components/searchbar/SearchBar';
import CreateDog from './components/createDog/CreateDog';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/detalle/:idRaza' element={<Detalles />} />
        <Route path='/administracion' element={<CreateDog />} />

        <Route path='/' element={<SearchBar />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
