import React, { Component } from "react"
import 'font-awesome/css/font-awesome.min.css';
import CreatePost from './createPost'
import PostList from './postList';

class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      content: '',
      author: "Rick James",
      voteCount: 0,
      posts: []
    }
  }

  onContentChange = (e) => {
    const name = e.target.name
    const content = e.target.value

    this.setState({
      [name]: content
    })

  }

  vote = (e, sentPost, operator) => {
    e.preventDefault()
    const posts = this.state.posts.filter(checkPost => sentPost.title !== checkPost.title)
    switch (operator) {
      case 'plus':
        sentPost.voteCount++
        break
      case 'minus':
        sentPost.voteCount--
        break
      default:
        console.log("something something")
    }
    posts.sort((a, b) => a.voteCount - b.voteCount)

    this.setState({
      posts: [...posts, sentPost]
    })

  }


  postSubmit = (e) => {

    e.preventDefault()

    let posts = this.state.posts

    const newPost = {
      author: this.state.author,
      content: this.state.content,
      title: this.state.title,
      voteCount: 0
    }
    posts.push(newPost)

    this.setState({
      posts: posts,
      content: "",
      title: ""
    })
  }

  render() {
    return (
      <div>
        <CreatePost
          postSubmit={this.postSubmit}
          onContentChange={this.onContentChange}
          title={this.state.title}
          content={this.state.content}
        />
        <PostList
          posts={this.state.posts}
          vote={this.vote}
        />
      </div>
    )
  }


}

export default Post