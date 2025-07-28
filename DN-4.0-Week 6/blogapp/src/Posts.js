import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        const postsList = data.map((p) => new Post(p.id, p.title, p.body));
        this.setState({ posts: postsList });
      })
      .catch((err) => {
        this.setState({ error: err.message });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in componentDidCatch:", error, errorInfo);
    alert("An error occurred: " + error.toString());
    this.setState({ error: error.toString() });
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;