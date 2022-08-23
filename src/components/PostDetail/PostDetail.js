import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
       const {postId} = useParams();
       const [postDetails, setPostDetails] = useState({});
       
         useEffect(() => {
               const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
               fetch(url)
               .then(res => res.json())
               .then(data => setPostDetails(data))
         },[postId])
    return (
        <div>
            <h4>post id: {postId}</h4>
            <p>title: {postDetails.title}</p>
            <p>body: {postDetails.body}</p>
          

          
        </div>
    );
};

export default PostDetail;