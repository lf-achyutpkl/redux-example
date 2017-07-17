import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';

import * as httpUtils from '../../utils/httpUtils';

class App extends Component {

  componentDidMount() {
    httpUtils.get('https://jsonplaceholder.typicode.com/posts').then(data => {
      this.props.savePost(data)
    }).catch(error => {
      console.error(error);
    })

    setTimeout(() => {
      console.log('Posts: ', this.props.posts);
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          {
            this.props.posts && this.props.posts.map(post => <div key={post.id}>{post.id} => {post.title}</div>)
          }
        </div>
      </div>
    );
  }
}

export default App;
