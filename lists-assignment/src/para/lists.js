import React from 'react'
import './lists.module.css';

const log = console.log

const Lists = (props) =>{
    return (
        <div className="lists">
            <ul>
                
                <li onClick={props.click}>{props.name}</li>
                <input type="text" onChange={props.change}/>
            </ul>
    <p style={props.stylee}>{props.para}</p>
        </div>
    )
}

export default Lists