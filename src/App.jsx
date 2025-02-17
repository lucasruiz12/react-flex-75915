import './App.css';
import Contador from './components/Contador/Contador';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      {/* <Navbar>
        <h1>Hola</h1> // De esta manera pasamos por "children". El h1 sería children de Navbar
      </Navbar> */}
      <Navbar />
      <ItemListContainer greetings="Bienvenido usuario" />
      {/* <Contador /> */}
    </>
  );
};

export default App;
