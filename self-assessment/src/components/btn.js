import React from 'react'

const btn = (props) => {
     // css
   let  btnToggle = {
    backgroundColor: 'red',
    border: 'none',
    fontSize: '36px',
    padding: '12px',
    color: '#fff',
    width: '100%',
    textTransform: 'capitalize',
    cursor: 'pointer'
  }
    return (
        <div>
            {props.showContent ? 
                <button onClick={props.click} style={btnToggle}>hide content</button>
                :<button onClick={props.click} style={btnToggle}>show content</button>
            }
        </div>
    )
}

export default btn