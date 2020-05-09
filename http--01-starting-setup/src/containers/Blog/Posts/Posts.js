import React, {Component} from 'react';
import classes from "./Posts.css";
import Post from "../../../components/Post/Post";
import axios from "../../../axios";
import {Route, Switch} from "react-router-dom";
import FullPost from "../../../components/FullPost/FullPost";
// import {Link} from "react-router-dom";

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
        this.props.history.push('/posts/' + id);
        // this.props.history.push({pathname: '/' + id})

        // this.setState({selectedPostId: id});
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong.</p>
        if (!this.state.error) {
            posts = this.state.posts.map((post) => {
                return (
                    // <Link key={post.id} to={"/" + post.id}>
                        <Post
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postClickedHandler(post.id)}
                        />
                    // </Link>
                )
            });
        }

        return (
            <div className={classes.Posts}>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} component={FullPost}/>
            </div>
        );
    }
}

export default Posts;