import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleClear = ()=>{
        setText("");
    }
    const handleCopy = ()=>{
        // console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    const [text, setText] = useState('');
    // text = "this is new text"; // this is a wrong way
    // setText = "this is new text"; // this is a Correnct way

    return (
        <>
        <div className='container' style={{color: props.mode==='dark'? 'white' : '#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'? 'grey' : 'white', color: props.mode==='dark'? 'white':'black'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-secondary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-secondary mx-1" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-secondary mx-1" onClick={handleCopy}>Copy Text</button>
            
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'? 'white' : '#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text : "write somthing to preview"}</p>
        </div>
        </>
    )
}
