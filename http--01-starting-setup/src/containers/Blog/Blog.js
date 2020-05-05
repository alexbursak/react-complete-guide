import React, { Component } from 'react';

// import Post from '../../components/Post/Post';
// import FullPost from '../../components/FullPost/FullPost';
// import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
// import axios from 'axios';
// import axios from '../../axios';
import Posts from "./Posts/Posts";
import {Route} from 'react-router-dom';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                {/*<Posts />*/}
                <Route path="/" exact render={() => <h1>asdasd</h1>}/>
                {/*<section>*/}
                {/*    <FullPost id={this.state.selectedPostId} />*/}
                {/*</section>*/}
                {/*<section>*/}
                {/*    <NewPost />*/}
                {/*</section>*/}
            </div>
        );
    }
}

export default Blog;