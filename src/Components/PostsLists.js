import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPosts} from '../Redux/postsDucks'

const PostsLists = () => {
    const dispatch = useDispatch();
    const posts = useSelector(store => store.blog.posts);
    return (
        
        <div>
            Listado posts
            <button onClick={() => dispatch(getPosts())}>Obtener posts</button>
            <ul>
               {
                    posts.map((item, index) => (
                       <li key={index}>
                           {item.title.rendered}
                       </li>
                   ))
               }
            </ul>
        </div>
    );
}

export default PostsLists;