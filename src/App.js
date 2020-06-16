import React from 'react';
import './App.css';
import List from './components/list'

export default class App extends React.Component {
// array of items
// property that holds an empty string or value
// state- setState()
// list out the items
// onSubmit 
// onChange

constructor(props) {
  super(props)
  this.state = {
    term: '',
    items: []
  }
}

// checks the value what the user is typing
// 
onChange = (event) => {
  this.setState({term: event.target.value})
}
onSubmit = (event) => {
  event.preventDefault()
  this.setState({
  term:'',
  items: [...this.state.items,this.state.term]
})
}

  render() {
  return (
    <div>
    <div className="header">
      <div className="wrapper">
        <img src="https://pbs.twimg.com/profile_images/829431121586880513/UGqLggLr.jpg" />
        <p className="title">Road to Hire</p>
      </div>
    </div>
    <div className="app">
      <div div className="app-wrapper">
        <p className="app-title">To-do List</p>
        <form className="App" onSubmit={this.onSubmit}>
          <input value= {this.state.term} onChange={this.onChange}
           placeholder="type here to add a task" type="text" id="box" />
          <br />

        </form>
        <br />
        <List items = {this.state.items} />

      </div>
    </div>
    </div>
  );
}
}
