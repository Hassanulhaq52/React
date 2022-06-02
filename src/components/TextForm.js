import React, { useState } from 'react'

export default function TextForm(props) {

const handleUpClick = () => {

// console.log('UpperCase was Clicked' + text);
let newText = text.toUpperCase();
setText(newText);

} 

const handleLoClick = () => {

  // console.log('UpperCase was Clicked' + text);
  let newText = text.toLowerCase();
  setText(newText);
  
  } 

  const handleClear = () => {

    let newText = '';
    setText(newText);
    
    } 

const handleOnChange = (event) => {

    // console.log('On Change');
    setText(event.target.value);
    
    } 

    const [text, setText] = useState('') 

  return (
<>
    <div className='container'>

<h1>{props.heading}</h1>

<div className="mb-3">

  <textarea className="form-control" value={text} onChange = {handleOnChange}  id="myBox" rows="8"></textarea>

</div>

<button className="btn btn-primary mx-1" onClick={handleUpClick}> Convert to UpperCase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}> Convert to LowerCase</button>
<button className="btn btn-primary mx-1" onClick={handleClear}> Clear Text</button>    
    
    </div>

<div className='container my-3'>

<h2>Your text Summary</h2>

<p>{text.split(' ').length} words and {text.length} characters</p>
<p>{ 0.008 * text.split(' ').length} Minutes to read </p>
<h2>Preview</h2>
<p>{text}</p>

</div>

    </>
  )
}
