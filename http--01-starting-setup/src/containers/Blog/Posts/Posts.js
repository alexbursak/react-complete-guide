import React, {Component} from 'react';
import classes from "./Posts.css";
import Post from "../../../components/Post/Post";
import axios from "../../../axios";

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
        axios.get('/posts')
            .then((response) => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {...post, author: 'Alex'}
                });
                this.setState({posts: updatedPosts})
            })
            .catch(error => {
                this.setState({error: true})
            });
    }

    postClickedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong.</p>
        if (!this.state.error) {
            posts = this.state.posts.map((post) => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postClickedHandler(post.id)}
                />
            });
        }

        return (
            <div className={classes.Posts}>
                <section className="Posts">
                    {posts}
                </section>
            </div>
        );
    }
}

export default Posts;