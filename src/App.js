import logo from './logo.svg';
import './style/App.css';
import React from 'react'; 
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p
        className='app-texto'
        >
          no te metas <code>src/App.js</code> feo ♪
        </p>
        
        <Link to='./Pan2'  className='App-link'>
          pant 2
        </Link>

        <Link to="./Componentes" className="App-link" >
          creando pantalla principal 
        </Link>
        
      </header>
    </div>
  );
}

export default App;

