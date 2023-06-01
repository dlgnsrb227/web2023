import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/pages/Main'
import Profile from './components/pages/Profile'
import Port from './components/pages/Port'
import Youtube from './components/pages/Youtube'
import Movie from './components/pages/Movie'
import Unsplash from './components/pages/Unsplash'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/port' element={<Port />} />
        <Route path='/youtube' element={<Youtube />} />
        <Route path='/movie' element={<Movie />} />
        <Route path='/unsplash' element={<Unsplash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
