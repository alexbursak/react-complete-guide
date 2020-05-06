import React, {Component} from 'react';

import './Blog.css';
import Posts from "./Posts/Posts";
import NewPost from "../../components/NewPost/NewPost";
import {Route, NavLink, Switch} from 'react-router-dom';
import FullPost from "../../components/FullPost/FullPost";

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                exact to="/"
                                // activeClassName="my-active"
                                // activeStyle={{
                                //     color: 'blue'
                                // }}
                            >Home</NavLink></li>
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
                <Route path="/" exact component={Posts}/>
                <Switch> {/* just an example */}
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/:id" exact component={FullPost}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;