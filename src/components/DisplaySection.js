import React from 'react'
import '../App.css'
import { Button } from './Button'
import './DisplaySection.css'
function DisplaySection() {
    return (
        <div className='display-container'>
            <video src="/videos/frontpage.mp4" autoPlay loop muted />
            <h1>CHRISTIAN ILAGAN</h1>
            <p>Penultimate Computer Science Student</p>
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
