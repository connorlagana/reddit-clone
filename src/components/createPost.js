import React from 'react'

const CreatePost = (props) => {
  return (
    <form onSubmit={props.postSubmit}>
      <input
        type="text"
        name="title"
        value={props.title}
        placeholder="title"
        onChange={props.onContentChange}
      />
      <input
        type="textarea"
        name="content"
        value={props.content}
        placeholder="POST IT"
        onChange={props.onContentChange}
      />

      <input
        type="submit"
        value="Post"
      />
    </form>
  )
}

export default CreatePost