import React from 'react'
import './PostList.css'
import postlist from "../../posts.json"
import ReactMarkdown from 'react-markdown'

const PostList = () => {
    console.log(postlist)
    return (
        <div className="postlist">
            <h1 className="title">All Posts</h1>
            {postlist.length &&
                postlist.map((post, i) => {
                    return (
                        <div className="post-card">
                            <h2>{post.title}</h2>
                            <small>Published on {post.date} by {post.author}</small>
                            <hr />
                            <ReactMarkdown source={post.content} />
                        </div>
                    )
                })
            }
        </div>
    )
}


export default PostList