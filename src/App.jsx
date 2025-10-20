import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PagesNotFound from './pages/PagesNotFound';
import Admin from './pages/Admin';
import User from './pages/User';

function App() {
  
  const [requests, setRequests] = useState([]); 

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Landing />} />

        <Route 
          path='/admin' 
          element={<Admin requests={requests} setRequests={setRequests} />} 
        />

        
        <Route 
          path='/user' 
          element={<User requests={requests} setRequests={setRequests} />} 
        />

        <Route path='*' element={<PagesNotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
