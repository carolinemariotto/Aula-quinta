import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Link from './components/Favoritos';
import { Routes,Route } from 'react-router-dom';
function App() {

   return(
     <>
    <Navbar/>
    <Routes>
       <Route path="/" element={ <Home/> } />
      <Route path='/link' elementos ={Link}/>
    </Routes>
    </>
  );
  
}

export default App;
