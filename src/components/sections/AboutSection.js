import React from 'react'
import './AboutSection.css'
import me from '../../images/me.JPG'

function AboutSection() {
    return (
        <div className="about-container">
            <div className="box">
                <div className="left">
                    <div className="img-container">
                        <img className='me' src={ me } alt="" />
                    </div>
                </div>
                <div className="right">
                    <div className="content">
                        <h1>Hi i'm Christian!</h1>

                        <p>
                            I'm currently in my final year of Computer Science at UNSW. Throughout my
                            time studying and pursuing projects, I have found my self to be extremely interested in web and 
                            game development.
                        </p>
                        <p>
                            Other than academics I enjoy working out and playing sports such as basketball and volleyball. I also engage myself
                            with extracurricular activities around university contributing to projects along the way.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
