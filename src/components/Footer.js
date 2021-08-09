import React from 'react'
import {
    AiOutlineGithub,
    AiFillLinkedin,
    AiFillMail,
} from "react-icons/ai";
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <a href="https://github.com/cmilagan" target="_blank">
                <AiOutlineGithub size="36px" color="#FFFF" />
            </a>
            <a href="https://www.linkedin.com/in/cmilagan/" target="_blank">
                <AiFillLinkedin size="36px" color="#FFFF" />
            </a>
            <a href="mailto:cmilagan7@gmail.com" target="_blank">
                <AiFillMail size="36px" color="#FFFF" />
            </a>
        </div>
    )
}

export default Footer
