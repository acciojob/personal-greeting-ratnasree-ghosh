
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
       <h1>Enter your name:</h1>
        <input onChange={(e)=> setName(e.target.value)}/>
        <p>hello {name}</p>
    </div>
  )
}

export default App
