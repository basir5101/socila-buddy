import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Comments from '../Comments/Comments';




const PostDetails = () => {
    let {postId} = useParams();
    const [post, setPost] = useState([])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    const [comments, setComments] = useState([])
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then(res => res.json())
        .then(data =>{
            setComments(data)
        })
    }, [])
    return (
        <div>
            <div className = 'post-area'>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
            <Comments comments = {comments} userId = {post.userId}></Comments>
        </div>
    );
};

export default PostDetails;