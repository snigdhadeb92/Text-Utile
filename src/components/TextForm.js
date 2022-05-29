import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCopy} from '@fortawesome/free-regular-svg-icons'
import {faArrowAltCircleDown} from '@fortawesome/free-regular-svg-icons'
//import {faBrush} from '@fortawesome/free-regular-svg-icons'



export default function TextForm(props) {
    const toupper = ()=>{
        //alert("I am a function")
        let textUpper = text.toUpperCase()
        setText(textUpper)
        props.showAlert("Converted in upper case", "success");
    }
    const tolower = ()=>{
        //alert("I am a function")
        let textUpper = text.toLowerCase()
        setText(textUpper)
        props.showAlert("Converted in lower case", "success");

    }
    const copyText = ()=>{
       var text1= document.getElementById("myBox")
       text1.select();
       navigator.clipboard.writeText(text1.value)
       props.showAlert("Text copy", "success");

    }
    const downloadFile = ()=>{

    }
    const clearText = ()=>{
        setText('');
        document.querySelector('textarea').defaultValue = '';
        props.showAlert("Text area is clear now", "success");


    }
    const extraSpace = ()=>{
       var newText = text.split(/[ ]+/)
       setText(newText.join(" "))
       props.showAlert("Removed all extra spaces", "success");

    }
    /*const handel=(event)=>{
       console.log("Handel on change")
       setText(event.target.value)
    }*/
    const [text, setText] = useState("");
    //var textSpace = $('#myBox').val;
    
    return (
        <>
        <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
        
        <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="myText"><b>{props.heading}</b></label><br/>
                    <button type="button" className="btn btn-success " onClick={toupper}>Convert to Uppercase</button>
                    <button type="button" className="btn btn-success  ml-3" onClick={tolower}>Convert to Lowercase</button>
                    <button type="button" className="btn btn-success  ml-3 " onClick={copyText}><FontAwesomeIcon icon={faCopy} style={{marginRight: 5}}></FontAwesomeIcon>Copy text</button>
                    <button type="button" className="btn btn-success  ml-3 " onClick={extraSpace}><FontAwesomeIcon icon={faCopy} style={{marginRight: 5}}></FontAwesomeIcon>Extra Space</button>
                    <button type="button" className="btn btn-success  ml-3 " onClick={downloadFile}><FontAwesomeIcon icon={faArrowAltCircleDown} style={{marginRight:5}}></FontAwesomeIcon>Download</button>
                    <button type="button" className="btn btn-success  ml-3 " onClick={clearText}><FontAwesomeIcon icon={faArrowAltCircleDown} style={{marginRight:5}}></FontAwesomeIcon>Clear</button>
                    

                    <textarea className="form-control my-3" onChange={(e) => setText(e.target.value)} style={{backgroundColor: props.mode==='light'?'white':'gray',color: props.mode==='light'?'black':'white' }} value={text}  id="myBox" rows="8"></textarea>
                </div>
            </form>
        </div>
        <div >
        <label htmlFor="myText"><b>Your text summary:-</b></label>
        <p>{text.split(" ").length-1} Words {text.length} character</p>
        <h3>Preview:- </h3>
        <p>{text}</p> 
        </div>
        </div>
        </>
    )
}
