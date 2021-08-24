import React from 'react'
import './PostList.css'
import postlist from "../../posts.json"
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw'


const PostList = () => {
    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 40).join(" ")
    })
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
                            <ReactMarkdown className="content" children={excerptList[i]} rehypePlugins={[rehypeRaw]} escapeHtml={false}/>...
                        </div>
                    )
                })
            }
        </div>
    )
}


export default PostList