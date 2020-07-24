import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CommentItem from './comment-item';


import App from './containers/app';
import { createStore } from 'redux';
import fields from './reducers';
/* eslint-disable no-unused-expressions */

const initialState = [
          {
            author: 'author: moderator',
            commentText: 'comment text: test message',
            date: new Date().toLocaleString()
          }
]
   removeComment(i) {
     let fields = this.state.fields.slice();
     fields.splice(i, 1);
     this.setState({ fields });
     localStorage.setItem('comments', JSON.stringify(fields));
  }


  handleChange(ev) {
    this.setState({
      [ev.target.name]:ev.target.value
    });
  }


  handleSubmit(ev) {
    ev.preventDefault();
    const fields = [...this.state.fields];
    if ( this.state.newAuthor !=='' && this.state.newCommentText !=='' ) {
      fields.push({
        author: this.state.newAuthor,
        commentText: this.state.newCommentText,
        date: new Date().toLocaleString(),
      });
      this.setState( {fields} );
    } else {
      alert("empty fields!");
    }
    localStorage.setItem('comments', JSON.stringify(fields));
    this.state.newAuthor = '';
    this.state.newCommentText = '';
  }

  componentDidMount() {
    let fields = [...this.state.fields];
    let data = JSON.parse(localStorage.getItem('comments'));
    if (localStorage.getItem('comments')) {
      fields = data;
    }
    else {
      fields = this.state.fields
    }
    this.setState({ fields });
  }

  const store = createStore(todos, initialState);



ReactDOM.render(
  <React.StrictMode>
  <App store={store}/>,
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
