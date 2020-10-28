import React from 'react';
import './App.css';
import { CharacterList } from './components/CharacterList/CharacterList';
import { Header } from './components/Header/Header';

function App() {
  return (
   <>
   <Header />
   <CharacterList />
   </>
  );
}

export default App;
