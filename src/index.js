import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/style.css';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Experienceandskills from "./views/Experienceandskills";
import Contact from "./views/Contact";
import Projects from './views/Projects';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Navbar />
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/projects' element={<Projects/>}/>
            <Route exact path='/experienceandskills' element={<Experienceandskills />}/>
            <Route exact path='/contact' element={<Contact />}/>
          </Routes>
        <Footer/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
