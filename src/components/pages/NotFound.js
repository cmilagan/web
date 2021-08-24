import React from 'react'
import Footer from '../reusables/Footer'
import './Post.css'

export const NotFound = (props) => {
    return (
        <>
            <div className="post-container">
                <h1>Page you are looking for doesnt exist</h1>
            </div>
            <Footer />
        </>
    )
}

export default NotFound

