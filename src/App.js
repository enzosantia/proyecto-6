import logo from './logo.svg';
import './App.css';

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
        <a
          className="App-link"
          href="src\componentes\tescomponentes.jsx"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
