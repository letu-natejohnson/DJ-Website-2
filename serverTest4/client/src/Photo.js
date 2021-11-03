import React, { Component } from 'react';


function Photo(props) {
    return (
        <div className="Photo">
            <img src={props.source} alt={props.alt}/>
        </div>
    )
    
}

export default Photo;