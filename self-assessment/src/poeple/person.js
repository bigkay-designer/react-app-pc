import React from 'react'
import classes from './person.module.css'

const persons = (props)=>{
    return (
        <div className={classes.person}>
            <p>{props.name} and he's {props.ethnicity}</p>
        <div>
            <input className={classes.input} type="text" onChange={props.change} />
        </div>
        </div>
    )
}

export default persons