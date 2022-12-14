import { useState } from 'react';
import './App.css';
import Button from './components/Button.js';
import Counter from './components/Counter.js';

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);

  return (
    <div className="App">
      <Counter countNum={count} />
      <Button clicker={incrementCount} />
      <Button clicker={incrementCount} />
      <Button clicker={incrementCount} />
      <Button clicker={incrementCount} />
    </div>
  );
}

export default App;
