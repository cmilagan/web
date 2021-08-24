import React from 'react'
import './Post.css'
import Footer from '../reusables/Footer'
import postlist from "../../posts.json"
import { Redirect } from "react-router-dom"
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const Post = (props) => {
    const validId = parseInt(props.match.params.id)
    if (!validId) {
        return <Redirect to="/404" />
    }
    const fetchedPost = {}
    postlist.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.title = post.title ? post.title : "No title given"
            fetchedPost.author = post.author ? post.author : "No author given"
            fetchedPost.date = post.date ? post.date : "No date given"
            fetchedPost.content = post.content ? post.content : "No content given"
        }
    })

    return (
        <>
            <div className="post-container">
                <h2>{fetchedPost.title}</h2>
                <small>Published on {fetchedPost.date} by {fetchedPost.author}</small>
                <hr />
                <ReactMarkdown children={fetchedPost.content} rehypePlugins={[rehypeRaw]} escapeHtml={false} />
            </div>
            <Footer />
        </>
    )
}

export default Post