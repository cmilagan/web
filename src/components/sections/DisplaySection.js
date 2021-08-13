import React from 'react'
import '../../App.css'
import { Button } from '../Button'
import './DisplaySection.css'
import { init } from 'ityped'
import { useEffect, useRef } from "react"
import frontpage from '../../videos/frontpage.mp4'
function DisplaySection() {
    const aboutme1 = useRef();

    useEffect(()=>{
        init(aboutme1.current, { 
            typeSpeed: 80, 
            backSpeed: 30,
            loop: true,
            showCursor: true,
            strings: ['computer science student', 'sports enthusiast', 'aspiring software engineer'] 
        });
    },[])
    return (
        <div className='display-container'>
            <video src={frontpage} autoPlay loop muted />
            <h1>christian ilagan</h1>
            <p><span ref={aboutme1}></span></p>
            <div className="display-btns">
                <Button className="btns" buttonStyle='btn--outline'
                buttonSize='btn--large'>about</Button>
                <Button className="btns" buttonStyle='btn--primary'
                buttonSize='btn--large'>projects</Button>
            </div>
        </div>
    )
}

export default DisplaySection
