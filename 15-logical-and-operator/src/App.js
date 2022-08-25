import { useState } from 'react';
import './App.css';
import Button from './components/Button.js';
import Counter from './components/Counter.js';
import ResetButton from './components/ResetButton.js';

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <Counter countNum={count} />
      <Button clicker={incrementCount} />
      <Button clicker={incrementCount} />
      <Button clicker={incrementCount} />
      <Button clicker={incrementCount} />
      {count > 0 && <ResetButton resetCount={resetCount} />}
    </div>
  );
}

export default App;
