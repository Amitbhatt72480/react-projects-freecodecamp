import React from 'react'
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Birthday from './components/1_Birthday/Birthday';
import Tours from './components/2_Tours/Main';
import MainRe from './components/3_Reviews/MainRe';

const App = () => {
  return (
  <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='/birthday' index element={<Birthday />} />
        <Route path='/tours' index element={<Tours />} />
        <Route path='/reviews' index element={<MainRe />} />
      </Routes>
    </BrowserRouter>

  </>
  )
}

export default App;