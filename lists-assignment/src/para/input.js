import React from 'react';

const input = (props)=>{
    return (
        <div>
            <input type="text" onChange={props.change}/>
        </div>
    )
}

export default input