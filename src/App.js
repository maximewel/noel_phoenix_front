import logo from './logo.svg';
import { Button } from '@material-ui/core';
import ApiDisplay from './components/ApiDisplay.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button color="primary">Hello material-UI button :-)</Button>
      <ApiDisplay></ApiDisplay>
    </div>
  );
}

export default App;