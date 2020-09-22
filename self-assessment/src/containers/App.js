import React, {Component} from 'react';
import './App.css';
import NewPara from '../components/newPara'
import Btn from '../components/btn'
const log = console.log

class App extends Component {

  constructor(props) {
    super(props);
    log('app.js]] constructor props')
  }
  // state
  state = {
    content: [
      {id:'te1', name:'kay', gender: 'male'},
      {id:'te2', name:'ayman', gender: 'male'},
      {id:'te3', name:'hanna', gender: 'female'}
    ],
    showContent : true
  }

  static getDerivedStateFromProps(props, state) {
    log('app.js]]] getDerviedStateFormProps', props)
    return state
  }

  componentDidMount() {
    log('app.js ]]] componentDidMount')
  }
  // toggle function
  toggle = () => {
    let hide = this.state.showContent
    this.setState({showContent: !hide})
  }

  // delete function
  delHandler = (content) => {
    let delContent = [...this.state.content]
    delContent.splice(content, 1)
    this.setState({ content: delContent})
  } 

  // change name handler
  
  changeNameHndlr = (e, id) => {
    const contentIndex = this.state.content.findIndex(content => {
      return content.id === id
    })

    let content = {...this.state.content[contentIndex]}
    content.name = e.target.value

    let contents = [...this.state.content]

    contents[contentIndex] = content
    this.setState({content: contents})
  }
  render() {
    log('app.js]]] render')
    // content render
    let content = null

    if (this.state.showContent){
      content = <NewPara
            title={this.props.title}
            content={this.state.content}
            click={this.delHandler}
            change={this.changeNameHndlr}/>;
    }
    return (
      <div className="App">
        <Btn
        showContent={this.state.showContent}
          click={this.toggle}/>
        {content}
      </div>
    );
  }
}

export default App;
