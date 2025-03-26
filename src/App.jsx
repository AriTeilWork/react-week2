import React, { useState } from 'react';
import Greeting from './components/Greeting';
import NameInput from './components/NameInput';
import Weekdays from './components/Weekdays';

function App() {
  const [name, setName] = useState('');

  return (
    <div>
      <h1>Welcome to React Week 2</h1>
      <NameInput name={name} setName={setName} />
      <Greeting name={name} />
      <Weekdays />
    </div>
  );
}

export default App;