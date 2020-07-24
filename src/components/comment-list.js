import React from 'react';

const CommentList = ({ props }) => {
  const { fields, removeComment } = props;
  return (
    <ul>
      <li>{props.author}</li>
      <li>{props.commentText}</li>
      <li>{props.date}</li>
      <button className="formButton" onClick = {props.removeComment}>Delete</button>
    </ul>
  )
}
