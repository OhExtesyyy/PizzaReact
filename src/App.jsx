import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Cart from './pages/Cart';

export default function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
       
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          
        </div>
      </div>
  );
}
