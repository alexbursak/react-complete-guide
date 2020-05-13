import React, {Component} from 'react';

import './Blog.css';
import Posts from "./Posts/Posts";
// import NewPost from "../../components/NewPost/NewPost";
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
// import FullPost from "../../components/FullPost/FullPost";
import AsyncComponent from "../../hoc/AsyncComponent";
const AsyncNewPost = AsyncComponent(() => {
    return import("../../components/NewPost/NewPost");
});

class Blog extends Component {
    state = {
        auth: true
    }

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                exact to="/posts"
                                // activeClassName="my-active"
                                // activeStyle={{
                                //     color: 'blue'
                                // }}
                            >Posts</NavLink></li>
                            <li><NavLink exact to={{
                                // pathname: this.props.match.url + '/new-post', - relative
                                pathname: '/new-post', // - absolute
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <h1>Home</h1>}/>*/}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> : null}
                    <Route path="/posts" component={Posts}/>
                    {/*<Route render={() => <h1>Not Found (404)!</h1>} />*/}
                    <Redirect from="/" to="/posts" />
                </Switch>
            </div>
        );
    }
}

export default Blog;