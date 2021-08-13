import React from 'react'
import Footer from '../reusables/Footer'
import myres from '../../images/cmilagan_resume.png'
import './Resume.css'

const Resume = () => {
    return (
        <div>
            <div className="container">
                <img src={myres} alt="" />
            </div>
            <Footer />
        </div>
    )
}

export default Resume
