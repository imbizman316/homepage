import React from 'react';
import Home from './components/Home';
import Resume from './components/Resume';
import Porfolio from './components/Portfolio';
import NotFound from './components/NotFound';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>        
        <Routes>
          <Route path="/" exact Component={Home}/>        
          <Route path="/resume" Component={Resume}/>
          <Route path='/portfolio' Component={Porfolio}/>
          <Route path="/homepage" Component={Home} />
          <Route path="*" Component={NotFound}/>
        </Routes>        

      </BrowserRouter>
      <h5 className='copyright'>copyright 2024 Mike Lee</h5>
    </>
  );
}

export default App;
