import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Demo from './Demo'

function App() {
  const[name,setName]=useState("Sumit")
  return (
    <div className="App">
     <h1>Hello</h1>
     <Demo name={name} />

     <button onClick={()=>{setName("Dhamanekar")}}>Update Name</button>
     
    </div>
  );
}

export default App;
