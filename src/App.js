import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

import CreatePost from './components/createPost'
import { thisExpression } from '@babel/types';

class App extends Component {
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
      case "minus":
        sentPost.voteCount--
        break
      default:
        console.log("something something")
    }
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
      <div className="App" >
        <CreatePost
          postSubmit={this.postSubmit}
          onContentChange={this.onContentChange}
          title={this.state.title}
          content={this.state.content}
        />

        {this.state.posts.map((post, key) =>
          <div key={key}>
            <h1>{post.title}</h1>
            <h5>{post.content}</h5>
            <p>{post.author}</p>
            <p>{post.voteCount}</p>
            <button onClick={(e) => this.vote(e, post, "plus")}>Up</button>
            <button onClick={(e) => this.vote(e, post, "minus")}>Down</button>
          </div>)
        }
      </div>
    );

  }
}

export default App;
