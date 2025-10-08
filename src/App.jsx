import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import PagesNotFound from './pages/PagesNotFound';
import Notes from './pages/Notes';
import Live from './pages/Live';

function App() {

  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/notes' element={<Notes />} />
          <Route path='/live' element={<Live />} />
          <Route path='*' element={<PagesNotFound />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
