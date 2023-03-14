import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer';
import CV from './components/CV/CV';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/skills';
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className='App-header'>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/thalia-meignan' element={<Home/>}/>
          <Route path='/cv' element={<CV/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
