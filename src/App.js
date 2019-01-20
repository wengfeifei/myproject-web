import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
  componentDidMount() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log('这是一个延迟加载请求'));
      }, 2000);
    });
    let request;
    if (window.XMLHttpRequest) {
      request = new XMLHttpRequest(); //IE7+,...
    }

    request.open("GET", "http://localhost:8080/myproject/test1/test.json", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");  //必须写在open和send中间
    request.setRequestHeader("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Accept");
    request.setRequestHeader("Access-Control-Allow-Methods", "Get,Post,Put,OPTIONS");
    request.setRequestHeader("Access-Control-Allow-Origin", "*");
    request.send();
    // fetch('http://localhost:8080/myproject/test1/test.jsonp', { mode: 'no-cors' }).then(res => { console.log('res', res) });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
