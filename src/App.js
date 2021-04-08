import React, { Component } from "react"

import Aboutme from './components/Aboutme'
import Mytown from './components/Mytown'


import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMenu: 'p'
    }
  }

  render() {
    return (
      <div className="App">

        <div className="menu">
          <div>
          <p className="menu-item" onClick={() => this.setState({ selectedMenu: 'p' })}>    About me</p> </div>
          <div><p className="menu-item" onClick={() => this.setState({ selectedMenu: 't' })}>    My Town</p>
</div>
        </div>

        {this.state.selectedMenu === 'p' ?
          <Aboutme />
          :
          <Mytown />
  
        }
      </div>
    );
  }
}


export default App;
