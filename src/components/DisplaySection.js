import React from 'react'
import '../App.css'
import { Button } from './Button'
import './DisplaySection.css'
import { init } from 'ityped'
import { useEffect, useRef } from "react"

function DisplaySection() {
    const aboutme1 = useRef();

    useEffect(()=>{
        init(aboutme1.current, { 
            typeSpeed: 80, 
            backSpeed: 30,
            loop: true,
            showCursor: true,
            strings: ['Computer Science student', 'Sports lover', 'Aspiring Software Engineer'] 
        });
    },[])
    return (
        <div className='display-container'>
            <video src="/videos/frontpage.mp4" autoPlay loop muted />
            <h1>CHRISTIAN ILAGAN</h1>
            <p>I am a <span ref={aboutme1}></span></p>
            <div className="display-btns">
                <Button className="btns" buttonStyle='btn--outline'
                buttonSize='btn--large'>ABOUT</Button>
                <Button className="btns" buttonStyle='btn--primary'
                buttonSize='btn--large'>PROJECTS</Button>
            </div>
        </div>
    )
}

export default DisplaySection
