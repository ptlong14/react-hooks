//66-67
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetching() {
    //    const[posts, setPosts]= useState([]) 
    //    useEffect(()=>{
    //        axios.get(`https://jsonplaceholder.typicode.com/posts/`)
    //        .then(res=>{
    //         console.log(res)
    //         setPosts(res.data)
    //        })
    //        .catch(err=>{
    //         console.log(err)
    //        })
    //    },[])

    const [id, SetId] = useState(1)

    const [post, setPost] = useState({})

    const [confirmId, setConfirmId] = useState(1);
    const handlerIdInput = () => {
        setConfirmId(id)
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${confirmId}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [confirmId])
    return (
        <div>
            <input type='text' placeholder='input the post ID'
                value={id} onChange={e => SetId(e.target.value)}
            ></input>
            <button onClick={handlerIdInput}>Fetch</button>
            <hr />
            <h5>Post with id {post.id}:</h5>
            <div>{post.title}</div>
            {/* <ul>
                {posts.map(post=><li key={post.id}>{post.id} - {post.title} </li>)}
            </ul> */}
        </div>
    )
}

export default DataFetching

