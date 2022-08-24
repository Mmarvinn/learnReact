import './App.css';
import RandomNumber from './components/RandomNumber.js';

function App() {
  return (
    <div className="App">
      <RandomNumber maxNum={100} />
    </div>
  );
}

export default App;
