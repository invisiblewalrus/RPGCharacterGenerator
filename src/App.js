import React from 'react';
import './App.css';
import { genRandomDnDChar } from './CharacterGen/DnDCharacterGeneraton';
import { CharacterCard } from './CharacterCard';

function App() {
  let character = genRandomDnDChar();
  
  return (
    <CharacterCard character={character} />
  );
}

export default App;
