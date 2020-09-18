import React from 'react'
const log = console.log

const para = (props) =>{
    return(
        <div>
            <input type="text" onChange={props.changed}/>
            <p>{props.content}</p>
            <p>{props.length}</p>
            <p>{props.lengthfun}</p>
            
        </div>
    )
}

export default para