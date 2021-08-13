import React from 'react'
import './AboutSection.css'
import me from '../../images/me.JPG'

function AboutSection() {
    return (
        <div className="about-container">
                <div className="box">
                    <div className="img-container">
                        <img className='me' src={ me } alt="" />
                    </div>
                    <div className="content">
                        <h1>Hi i'm Christian!</h1>

                        <p>
                            I'm currently in my penultimate year of Computer Science at UNSW. Throughout my
                            career thus far, I have found my self to be extremely interested in web and 
                            game development.
                        </p>

                        <p>
                            Other than academics I engage myself with 
                        </p>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
