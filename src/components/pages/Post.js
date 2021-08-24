import React from 'react'
import './Post.css'
import Footer from '../reusables/Footer'
import postlist from "../../posts.json"
import { Redirect } from "react-router-dom"

const Post = (props) => {
    const validId = parseInt(props.match.params.id)
    if (!validId) {
        return <Redirect to="/404" />
    }
    return (
        <>
            <div className="post-container">
                <h1>This is an individual post</h1>
            </div>
            <Footer />
        </>
    )
}

export default Post