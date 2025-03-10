import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from "./components/Navbar/Navbar";
import ItemDetail from './components/ItemDetail/ItemDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} /> 
          <Route path="/detalle/:id" element={<ItemDetail />} /> 
          <Route path="*" element={<p>404 ROUTE NOT FOUND</p>} /> 
          {/* <Route path="/home" element={<p>Estamos en home</p>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
