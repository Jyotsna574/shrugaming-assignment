import './App.css';
import Header from './Header';
import React from 'react';
import Carddesign from './card-design';


function App() {
  return (
    
    <div className="App">
      <Header />
      <div className='welcome'><h1>Welcome Vasma</h1></div>
      <div className='cards'>
      <div className='1'><Carddesign /></div>
      <div className='2'><Carddesign /></div>
      <div className='3'><Carddesign /></div>
      <div className='4'><Carddesign /></div>
      <div className='5'><Carddesign /></div>
      <div className='6'><Carddesign /></div>
      <div className='7'><Carddesign /></div>
      <div className='8'><Carddesign /></div>
      </div>

        
      </div>
    
  )
}

export default App;
