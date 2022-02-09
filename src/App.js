import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Favoritos from './components/Favoritos';
function App() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Favoritos/>
    </div>
  );
}

export default App;
