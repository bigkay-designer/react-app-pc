import React, { Component } from 'react'
import Content from './para/content';

class Contents extends Component {


  shouldComponentUpdate(nextProps, nextState){
    console.log('newPara **** shouldComUpd')
    return true
  }
  
  getSnapshotBeforeUpdate(prevProps, PrevState){
    console.log('newPara **** getsnapBefUpd')
    return null
  }

  componentDidUpdate(){
    console.log('newPara,**** componentDidUpd')
  }
  render() {

    console.log('appp.js newPara rendring....')
    return this.props.content.map((content) => {
      return <Content
        title={this.props.title}
        name={content.name}
        gender={content.gender}
        key={content.id}
        click={this.props.click}
        change={e => this.props.change(e, content.id)} />
    })
  }
}

export default Contents