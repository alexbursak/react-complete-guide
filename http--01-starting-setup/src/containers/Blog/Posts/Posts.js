import React from 'react';
import classes from "./Posts.css";

const Posts = (props) => (
    <div className={classes.Posts}>
        {props.children}
    </div>
);

export default Posts;