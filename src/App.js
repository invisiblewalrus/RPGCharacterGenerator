import React from 'react';
import './App.css';
import { rollStat, genRandomDnDChar } from './CharacterGeneraton';

function App() {
  console.log(genRandomDnDChar());
  let stat = rollStat();
  return (
  <div>{stat}</div>
  );
}

export default App;
