import React from 'react'

export default function ErrorNotice(props) {
    return (
        <div className="alert alert-danger text-center mt-2">
            {props.message}<br/>
            
            <button className="btn btn-outline-danger" onClick={props.clearError}>Ok</button>
        </div>
    )
}
