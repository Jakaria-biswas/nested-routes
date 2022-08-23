import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Post = () => {

    const [posts, setPosts] = useState([]);
    const cutPost = posts.slice(0,50)

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
 
    return (
        <div>
            <h4>post page in here total posts: {posts.length}</h4>
            <div style={{width:"300px"}} >

                {
                    cutPost.map(post => <Link  style={{ margin: "5px" }} to={`/post/${post.id}`}>{post.id},</Link>)
                }
                 <Outlet/>
            </div>
        </div>
    );
};

export default Post;