import { useState } from 'react';
import './App.css';
import { Effect } from './components/Effect';
import { Form } from './components/Form';

function App() {

  const [text, setText] = useState("")
  const [t2, setT2] = useState("")

  const f = (e) => {
    setText(e.target.value)
  }

  const f2 = (e) => {
    setT2(e.target.value)
  }
  

  return (
    <div className="App">
      <Effect text={text} t2={t2}/>
      <Form f={f}/>
      <Form f={f2}/>
    </div>
  );
}

export default App;
