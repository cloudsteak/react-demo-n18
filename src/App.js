import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://gerillamentorklub.hu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tanulj valami jó dolgot!
        </a>
      </header>
    </div>
  );
}

export default App;
