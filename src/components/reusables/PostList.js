import React from 'react'
import './PostList.css'
import postlist from "../../posts.json"
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw'
// const parseHtml = htmlParser({
//     isValidNode: node => false,
//     // processingInstructions: [/* ... */]
//   })

const PostList = () => {
    console.log(postlist)
    // sort by most recent posts
    postlist.reverse();
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
                            <ReactMarkdown children={post.content} rehypePlugins={[rehypeRaw]} escapeHtml={false}/>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default PostList