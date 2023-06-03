import './App.css';
import Nav from './components/nav/Nav.jsx';
import Footer from './components/footer/Footer.jsx';
// import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />

      {/* <Routes> */}
      {/* <Route path={'/inicio'} element={<Home />} caseSensitive={true} /> */}
      {/* <Route path={'*'} element={<ErrorPage />} /> */}
      {/* </Routes> */}

      <Footer />
    </div>
  );
}

export default App;
