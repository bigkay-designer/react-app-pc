import React, {Component} from 'react'
import './content.css'
class Contents extends Component {
    render() {
        console.log('app.js]]] content rendring')
        return ( 
            <div className="main-div">
                <h1>{this.props.title}</h1>
                <div className="test">
                    <h1 onClick={this.props.click}>the name is <span>{this.props.name}</span> and i am a {this.props.gender} </h1>
                    <input onChange={this.props.change} type="text"/>
                </div>
            </div>
            
        )
    }
}

export default Contents