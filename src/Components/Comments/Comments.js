import React, { useState, useContext, useEffect } from 'react';

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

    return (
        <div>
            <h4 style = {{textAlign: 'center'}}>All comments: {commentDetails.length}</h4>
          {
              
              commentDetails.map(comment => <div className = 'comment-area'>
                  <img src={comment.picture} alt=""/>
                  <h4>Name: {comment.name}</h4>
                  <p>{comment.body}</p>
              </div>)
          }
        </div>
        
    );
};

export default Comments;