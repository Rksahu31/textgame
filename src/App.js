import About from "./components/About";
import Navbar from "./components/Navbar";
import Textfrom from "./components/Textfrom";
import React ,{useState} from 'react';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {

    const [mode , setMode] = useState('light');
    
  
    const changeMode =()=>{

      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor='#010110';
        document.title='Textutility-Dark';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
        document.title='Textutility-White';
      }

    }
  return (


    <>
    <Router>

   
   <Navbar title ="Textutilis" about ="About" home="my Home" mode={mode} tugle={changeMode}/>
      
      <div className="container my-3">
        
     
       
      <Routes>
        <Route excat path="/" element={<Textfrom heading =" ENter your text to anlazie" mode={mode}/>} />
        <Route exact path="/about" element={ <About/>} />
      </Routes>
       
      </div>

    </Router>
    </>
 
  );
}



export default App;




