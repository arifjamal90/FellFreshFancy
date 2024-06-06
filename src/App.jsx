
import './App.css'
import Home from './Component/Home/Home'
import Navbar from './Component/navbar/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import './Component/Home//Home.css'
// import Feature1 from './Component/Feature1/Feature1';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import CardDetails from './Component/CardDeatils/CardDetails';

function App() {
  

  return (
    <div className='arifff'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={ <Home/>}/>
    <Route path='/card' element ={<CardDetails/>}/>
  
    </Routes>

    </BrowserRouter>
    </div>
  
  )
}

export default App
