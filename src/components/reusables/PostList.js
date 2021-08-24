import React from 'react'
import './PostList.css'
import postlist from "../../posts.json"
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw'
import { Link } from 'react-router-dom'

const PostList = () => {
    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 30).join(" ")
    })
    return (
        <div className="postlist">
            <h1 className="title">All Posts</h1>
            {postlist.length &&
                postlist.map((post, i) => {
                    return (
                        <Link className="openpage" to={`/post/${post.id}`}>
                            <div key={i} className="post-card">
                                <h2>{post.title}</h2>
                                <small>Published on {post.date} by {post.author}</small>
                                <hr />
                                <p>
                                    <ReactMarkdown className="content" children={excerptList[i]} rehypePlugins={[rehypeRaw]} escapeHtml={false}/>
                                </p>
                                <small>Read more...</small>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}


export default PostList