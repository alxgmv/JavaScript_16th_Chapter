import React from 'react';
import { connect } from 'react-redux';

import CommentList from '../components/comment-list';
import AddComment from '../components/new-comment';

import { addComment } from '../actions';


let App = (props) => {
  const {
    fields, addComment
  } = props;
  return (
    <div>
      <CommentList fields ={todos} toggleTodo={toggleTodo} />
      <AddComment addComment={addComment}/>
    </div>
  )
}
