import React, { useState } from 'react';
import Greeting from './components/Greeting';
import NameInput from './components/NameInput';
import Weekdays from './components/Weekdays';

const App = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <NameInput name={name} setName={setName} />
      <Greeting name={name} />
      <Weekdays />
    </div>
  );
};

export default App;