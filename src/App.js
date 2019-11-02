import React from 'react';
import './App.css';
import Intro from './intro/Intro'
import Unbox from './unbox/Unbox'
import About from './about/About'

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <About />
        <Intro />
        <Unbox />
      </div>
    </div>
  );
}

export default App;
