import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import NoyFound from './pages/NotFound';

export default function App() {


  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <Home />
        </div>
      </div>
    </div>
  );
}
