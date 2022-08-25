import { useState } from 'react';
import './App.css';
import Button from './components/Button.js';
import Counter from './components/Counter.js';

const texts = ['BTN #1', 'BTN #2', 'BTN #3', 'BTN #4', 'BTN #5', 'BTN #6'];

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);

  return (
    <div className="App">
      <Counter countNum={count} />
      {texts.map((text, index) => {
        return <Button clicker={incrementCount} text={text} key={index} />;
      })}
    </div>
  );
}

export default App;
