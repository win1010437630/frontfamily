import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-weui';
import './App.css';
import 'weui';
import 'react-weui/build/dist/react-weui.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button>hello wechat</Button>
      </div>
    );
  }
}

export default App;
