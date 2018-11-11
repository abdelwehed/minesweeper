import React, { Component } from 'react';
import './App.css';
import Layout from './components/layout';
import Minesweeper from './containers/minesweeper';

// for tests
export class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Minesweeper />
        </Layout>
      </div>
    );
  }
}

export default App;
