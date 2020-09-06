import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Grid, Paper } from '@material-ui/core';


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
                posts.map(post => <Grid container spacing={3} key = {post.id} className = 'postarea'>
                    <Grid item xs={12}>
                        <Paper elevation={3}>
                            <h3>{post.title}</h3>
                            <Button variant="contained" color="primary" href={'posts/'+ post.id}>See More</Button>
                        </Paper>                        
                    </Grid>
                </Grid>)
            }
        </div>
    );
};

export default Home;