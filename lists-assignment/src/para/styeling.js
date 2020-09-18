import React from 'react';
import classes from './lists.module.css'
import styled from 'styled-components'

let cssStyles = {
    // border: '1px solid #000',
    // padding: '10px 12px',
    // // width: '50%',
    // margin: '30px auto auto auto',
    // // fontSize: '22px',
    // backgroundColor: 'grey',
    // color: 'lightblue',
    // cursor: 'pointer',
    // ':hover':{
    //     backgroundColor: '#efefef',
    //     color: '#000'
    // },

    
    
    // ' 
}

// let StyledDiv = styled.div `
//     border: 1px solid #000;
//     margin: 30px auto auto auto;
//     background-color: green;
//     font-size: 30px;

//     @media (min-width: 500px){
//     width:430px;
//     // margin: auto/;
//     }
// `
const styling = (props)=>{
    return (
        // <>
        <div className={classes.div}> 
            <p style={cssStyles} className={classes.names} onClick={props.click}>{props.names}</p>
        </div>
    )
}

export default styling