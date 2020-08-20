import React, { useState } from 'react'
import {useSpeechRecognition} from 'react-speech-kit'
import logo from './logo.svg';
import './App.css';

function App() {
  const [text,setText]=useState();
  const {listen,stop}=useSpeechRecognition({
    onResult:result=>setText(result)
  });
  return (
    <div className="App">
      <h2>Converting the Speech to Text...</h2>
      <textarea value={text}></textarea>
      <p>
        <button onClick={listen}>Listen</button>
        <button onClick={stop}>Stop</button>
      </p>
    </div>
  );
}

export default App;
