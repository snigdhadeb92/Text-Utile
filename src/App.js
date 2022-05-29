//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import AlertMsg from './components/AlertMsg';
import Contact from './components/Contact';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { useState } from 'react';



function App() {
  const [dMode, setMode] = useState('light');
  const [alermsg, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 4000);
  }

  const toggleMode = () => {
    if (dMode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'gray'
      showAlert("Dark mode is enable", "success");
      document.title = "Textutil - Dark Mode"
      //setInterval(()=>{
      //  document.title="Textutil is an Amazing"
      //},2000)
      //setInterval(()=>{
      //  document.title="Install textutile now"
      //},1500)
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is enable", "success");


    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" about="About Us" contact="Contact" mode={dMode} toggleMode={toggleMode} />
        <AlertMsg alertMode={alermsg} />
        <div className='container my-3'>

          <Routes>
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/" element={<TextForm heading="Enter Text:" mode={dMode} showAlert={showAlert} />}/>
          </Routes>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
