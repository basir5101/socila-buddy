import React, { useState, useContext, useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';

const Comments = (props) => {
    const{comments, userId} = props;
    const commentDetails = comments.filter ( cmnt => cmnt.postId == userId)
    const [photo, setPhoto] = useState([])
    useEffect(() =>{
        fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => setPhoto(data.results))
    }, [])
    commentDetails.forEach(cmnt => cmnt.picture = 'https://i.imgur.com/hQI6izO.jpg')
console.log(commentDetails)
    return (
        <div>
            <h4 style = {{textAlign: 'center'}}>All comments: {commentDetails.length}</h4>
          {
              
              commentDetails.map(comment => <Grid container spacing={3} className = 'commentarea' container
              direction="row"
              justify="space-between"
              alignItems="flex-end">
                   <Grid item xs={3} sm={1}>
                         <Paper>
                            <img style = {{height: '92px'}} src={comment.picture} alt=""/>
                         </Paper>
                    </Grid>
                    <Grid item xs = {12} sm = {11}>
                        <Paper>
                            <h5>{comment.body}</h5>
                            <p>{comment.email}</p>
                        </Paper>
                    </Grid>
              </Grid>)
          }
        </div>
        
    );
};

export default Comments;