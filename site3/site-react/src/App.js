import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Profile from './components/pages/Profile'
import Port from './components/pages/Port'
import Youtube from './components/pages/Youtube'
import Movie from './components/pages/Movie'
import Unsplash from './components/pages/Unsplash'
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <BrowserRouter>
      <Header attr={["header__wrap", "bg-blue", "nanumneo"]}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/port' element={<Port />} />
          <Route path='/youtube' element={<Youtube />} />
          <Route path='/movie' element={<Movie />} />
          <Route path='/unsplash' element={<Unsplash />} />
        </Routes>
      <Footer attr={"footer__wrap section bg-blue nanumneo"}/>
    </BrowserRouter>
  );
}

export default App;