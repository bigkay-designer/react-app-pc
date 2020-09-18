import React, {Component} from 'react';
import './App.css';
import Persons from './poeple/person'
import Input from './poeple/input'
import styled from 'styled-components'
const log = console.log

class App extends Component {

  state = {
    persons :[
      {id: 'dhndkj', name:'khalid', ethnicity: 'somali'},
      {id: 'dhns', name:'faarax', ethnicity: 'kenya'},
      {id: 'jfns', name:'ibrahim', ethnicity: 'sudan'},
      {id: 'sdjkk', name:'yahya', ethnicity: 'arab'},
    ],
    content: true
  }

  onChangeHandler = (e, id)=>{

      let pIndex = this.state.persons.findIndex(person =>{
        return person.id === id
      })

      let person = {
        ...this.state.persons[pIndex]
      }

      person.name = e.target.value

      let newPerson = [
        ...this.state.persons
      ]
      
      newPerson[0] = person
      log(pIndex)

      this.setState({persons: newPerson})
  }
  
  toggle = ()=>{
    let dontShow = this.state.persons
    this.setState({persons: !dontShow})
  }
  render() {
      /// render content on to the page

      // input style
    let StyleInput = styled.input `
      margin-top: 40px;
      font-size: 20px;
    ` 

    let StyleButton = styled.button `
    background-color: blue;
    color: white;
      border: none;
      padding: 10px 15px;
      font-size: 30px;
      margin-top: 30px;
      cursor: pointer;
    `
    /// rendting persons 
      let persons = null

      if(this.state.content){
        persons = (
          <div>
            {
              this.state.persons.map(person =>{
                return <Persons 
                key={person.id}
                name={person.name}
                ethnicity={person.ethnicity}
                change={e=> this.onChangeHandler(e, person.id)} />
              })
            }
          </div>
        )
      }
    
    return (
      <div className="App">
        <StyleButton onClick={this.toggle}>toggle</StyleButton>
       {persons}
      </div>
    );
  }
}

export default App;
