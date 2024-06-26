
import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('Press a button');

  const handleClick = (buttonNumber) => {
    if (buttonNumber === 1) {
      setText('Button 1 pressed');
    } else if (buttonNumber === 2) {
      setText('Button 2 pressed');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div id="text">{text}</div>
        <button onClick={() => handleClick(1)}>Button 1</button>
        <button onClick={() => handleClick(2)}>Button 2</button>
      </header>
    </div>
  );
}

export default App;
