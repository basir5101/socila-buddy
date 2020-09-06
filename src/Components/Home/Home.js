import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from '@material-ui/core/Button';


const Home = () => {
    const [posts, setPosts] = useState([])
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <div>
            {
                posts.map(post => <div key = {post.id} className = 'post-area'>
                    <h3>{post.title}</h3>
                    <Button variant="contained" color="primary" href={'posts/'+ post.id}>See More</Button>
                </div>)
            }
        </div>
    );
};

export default Home;