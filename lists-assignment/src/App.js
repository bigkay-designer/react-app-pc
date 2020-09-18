import React, {Component} from 'react';
import classes from './App.module.css';
import Sty from './para/styeling';
import Lists from './para/lists';
import Radium, {StyleRoot} from 'radium'
import styled from 'styled-components'
const log = console.log

class App extends Component {
  // state = {
  //   para:[''],
  //   showContent: true
  // }

  // onChangedHandler = (e) =>{
  //   let para = e.target.value
  //   this.setState({para: para})
  // }

  state = {
    lists: [
      {id:'43ds',name: 'khalid'},
      {id:'dsds',name: 'yahya'},
      {id:'dsssds',name: 'ibrahim'},
      {id:'dsdss',name: 'abdi'}
    ],
    par: '',
    content: true
  }

  // state ={
  //   names :[
  //     {id: 'dsdsdsf', name: 'kay'},
  //     {id: 'dddsf', name: 'abdi'},
  //     {id: 'sdfjlf', name: 'mibsako'},
  //     {id: 'ssad0k', name: 'ibby'}
  //   ],
  //   showContent: true
  // }

  changeFirstLetter = (e, id)=>{
    let listIndex = this.state.lists.findIndex(list =>{
      return list.id === id
    })

    let lists = {
      ...this.state.lists[listIndex]
    }
    
    lists.name = e.target.value
    let newList = [
      ...this.state.lists
    ]
    
    newList[listIndex] = lists
    this.setState({lists: newList})
  }
  deleteHandler = (index)=>{
     let lists = [...this.state.lists]
     lists.splice(index, 1)
     this.setState({lists: lists})
  }

  // parHandler = (e)=>{
  //   this.setState({par: e.target.value})
  // }

  toggleHandler = ()=>{
    let dontShow = this.state.showContent
    this.setState({showContent: !dontShow})
  }
  
  render() {
  //   let para = this.state.para
  //   let paraLength = 5
  //   let paraFunction = () =>{
      
  //     if(this.state.showContent){
        
  //         return (
  //         <div>
  //            <Para 
  //             content = {para}
  //             changed = {this.onChangedHandler}
  //             length = {para.length}/>
  //         </div>
  //         )
  //   }
  // }
  //   let paraLengthFun = ()=>{
  //     if(para.length > paraLength){
  //       return <Para 
  //       lengthfun='too long'/>
  //     }else{
  //       return <Para 
  //       lengthfun='too short'/>
  //     }
  //   }
    
  let StyleButton = styled.button `
    background-color: ${props => props.alt ? 'red': 'green'};
    border: none;
    border-radius: 12px;
    padding: 10px 20px;
    font-size: 22px;
    color: #000;
    margin-top: 20px ;
    cursor: pointer;

    &:hover{
      background-color: ${props => props.alt ? 'pink' : 'lightgreen'};
      color: #fff;
    }
  `



  // let green = []

  // if(this.state.names.length <= 2){
  //   green.push('green')
  // }
  // if(this.state.names.length <= 1){
  //   green.push('fonts')
  // }

  // let names = null;

  // let btnCls = [classes.button]
  // if(this.state.showContent){
  //   names = (
  //     <div>
  //       {this.state.names.map(name =>{
  //         return <Sty 
  //         names={name.name}
  //         key={name.id}
  //         st={green.join(' ')}
  //         click={this.deleteHandler}/>
  //       })}
  //     </div>
  //   )
  //   btnCls.push(classes.red)
    
  // }


    // / lists
    let lists = null
    
    if (this.state.content){
      lists = (
        <div>
          {this.state.lists.map((list, index) =>{
            return <Lists 
            click = {this.deleteHandler.bind(index)}
            name={list.name}
            key={list.id}
            par={this.parHandler}
            change={(e)=>this.changeFirstLetter(e, list.id)}/>
          })}
        </div>
      )
    }





    return (
      <div className={classes.App}>
        
        {/* <button className={btnCls.join(' ')} onClick={this.toggleHandler}>change</button> */}
        {/* {names} */}
        {/* {paraFunction()}
        {paraLengthFun()} */}
        {lists}
        {/* {this.changeFirstLetter()} */}
      </div>
    );
  }
}

export default App;
