import React from 'react';
import './App.css';
import Head from './Header'

function App() {

  function textChanger(){
    const contents =["Naruto","Death note","One peice","Demon slayer","Tokyo revengers","Blue lock","Attack on titan"];
    const index = Math.floor(Math.random()*7);
    return contents[index]

  }
  return (
    <div> 
      <h1>Anime series</h1><h3>{textChanger()}</h3>
      <Head/>
    </div>
  );
}

export default App;
