import React ,{useState} from 'react'

export default function Textfrom(props) {

     const handelSpace =()=>{

      let newtext = text.split(/[ ]+/);
      setText(newtext.join(" "))
     }   

   const handelCopy =()=>{
    
         let text3= document.getElementById("my box");
         text3.select();
         navigator.clipboard.writeText(text3.value);
   }
     
  const handleloClick =()=>{
    // console.log("uppercase was fired")
    let lotext = text.toLowerCase();
    setText(lotext);
  }
    
  const handleclearClick =()=>{
    // console.log("uppercase was fired")
    let lotext = '';
    setText(lotext);
  }

    const handleUpClick =()=>{
        // console.log("uppercase was fired")
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handleunchange =(event)=>{
        // console.log("on change")
        setText(event.target.value)
    } 

    const [text, setText] = useState('Enter Text here'); // using useState hooks bro 

  return (

    <> 
    <div className="container my-3"  style={{color : (props.mode) === 'dark'?'white': 'black' }} >

         <h1>{ props.heading }</h1>
        <div className="mb-3">
        
         <textarea className="form-control" value={text} style={{backgroundColor : (props.mode) === 'dark'?'gray': 'white' ,color : (props.mode) === 'dark'?'white': 'black' }} onChange={handleunchange} id="my box" rows="8"  ></textarea>
        </div>

         <button className="btn btn-primary " onClick={handleUpClick}>CONVERT TO UPPERCASE</button>

         <button className="btn btn-primary mx-1" onClick={handleloClick}>CONVERT TO LOWERCASE</button> 

         <button className="btn btn-primary " onClick={handleclearClick}>clear NOW </button>

         <button className="btn btn-primary  mx-1" onClick={handelCopy}>Copy Now </button>
         <button className="btn btn-primary  mx-1" onClick={handelSpace}> Remove space </button>

    </div>
       
       <div className="container my-3" style={{ color : (props.mode) === 'dark'?'white': 'black' }}>
       
       <h1>Your text history</h1>
       <p>your character no = {text.length} & your no of words {text.split (" ").length}</p>
       <p>you can read in {0.008* text.split (" ").length} minute</p>
       <h2>Preview</h2>
       <p>{text}</p>
       </div>

    </>
  )
}
