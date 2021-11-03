import React, { Component } from 'react';


function Paragraph (props) {
    return (
        <div className="Paragraph">
            <h1 className="Heading">{props.heading}</h1>
            <p className="Body">{props.body}</p>
        </div>
    )
}

export default Paragraph;