import React from 'react'

const PostList = (props) => {
  return (
    props.posts.map((post, key) =>
      <div key={key}>
        <h1>{post.title}</h1>
        <h5>{post.content}</h5>
        <p>{post.author}</p>
        <p>{post.voteCount}</p>
        <i
          class="fa fa-angle-double-up"
          onClick={(e) => props.vote(e, post, "plus")}></i>
        <i
          class="fa fa-angle-double-down"
          onClick={(e) => props.vote(e, post, "minus")}></i>
      </div>)

  )
}

export default PostList