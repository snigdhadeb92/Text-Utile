import React, { useState } from 'react'

export default function About() {
    const [myStyle, setMyState] = useState({
        backgroundColor: 'black',
        color: 'white',
        padding: 10
    })

    const toggleState = () => {
        if (myStyle.color === 'white') {
            setMyState({
                backgroundColor: 'white',
                color: 'black',
                padding: 10
            })
        } else {
            setMyState({
                backgroundColor: 'black',
                color: 'white',
                padding: 10
            })
        }
    }
    return (
        <div className='container' style={myStyle}>
            <div className="accordion" id="accordionExample" >
                <div className="card" style={myStyle}>
                    <div className="card-header my-3" id="headingOne" style={myStyle}>
                        <h2 className="mb-0">
                            About Us:
                        </h2>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body" style={myStyle}>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div className="card"></div>
            </div >
            <div className='my-3'>
                <button type='button' onClick={toggleState} className="btn btn-primary">Enable bark mode</button>
            </div>
        </div>
    )
}
