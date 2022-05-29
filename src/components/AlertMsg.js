import React from 'react'

export default function AlertMsg(props) {
    return (
        props.alertMode &&<div>
             <div className={`alert alert-${props.alertMode.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alertMode.message}</strong>: {props.alertMode.type}
                
            </div>
        </div>
    )
}
