import React, { Component } from 'react';


import styled from 'styled-components'

const Outer = styled.div`
  text-align: center; 
`
const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`
class App extends Component {
  render() {
    return (
      <Outer>
        <Header>
          <h1 className="App-title">Welcome to React</h1>
        </Header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Outer>
    );
  }
}

export default App;
