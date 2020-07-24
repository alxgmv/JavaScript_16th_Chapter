import React from 'react';

const AddComment = ({ addComment }) => {
  const { fields, handleSubmit, handleChange } = props;

    return (
      <div>
        <form className="CommentForm" onSubmit={props.handleSubmit}>
          <label>
            Author name:
            <input
              name="newAuthor"
              className="CommentInput"
              type="text"
              placeholder="Name"
              value={props.state.newAuthor}
              onChange={props.handleChange}
            />
          </label>
          <label>
            Comment text:
            <textarea
              name="newCommentText"
              className="CommentText"
              type="submit"
              placeholder="Comment text"
              value={props.state.newCommentText}
              onChange={props.handleChange}
            />
          </label>
          <button type="submit" className="formButton">Submit</button>
        </form>
      </div>
    )
}
