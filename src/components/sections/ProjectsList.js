import React from 'react'
import CardItem from '../reusables/CardItem'
import loopmania from '../../images/loopmania.PNG'
import website from '../../images/personalweb.PNG'
import stimpact from '../../images/stimpact.jpg'
import flockr from '../../images/flockr.png'
import flatpack from '../../images/flatpack.PNG'
import './ProjectsList.css'

const ProjectsList = () => {
    return (
        <div className="projects__container">
            <ul className="projects__items">
                <CardItem 
                    src={loopmania}
                    text="Videogame created using OOP (Java) and JFX"
                    label="Game"
                    path='/post/1629640800'
                />
                <CardItem 
                    src={website}
                    text="Personal website created with HTML/CSS/JavaScript (REACT)"
                    label="Website"
                    path='/post/1629554400'
                />
                <CardItem 
                    src={stimpact}
                    text="Developed a neuralstimulator to be used on animals (C/Python/Kivy)"
                    label="Firmware/Software"
                    path='/post/1629900000'
                />
                <CardItem 
                    src={flockr}
                    text="Developed a communication platform similar to slack/discord (Python/Flask)"
                    label="Frontend/Backend"
                    path='/post/1629727200'
                />
                <CardItem 
                    src={flatpack}
                    text="Developed modular furniture targeting the problem of waste"
                    label="Design/Development"
                    path='/post/1629813600'
                />
            </ul>
        </div>
    )
}

export default ProjectsList