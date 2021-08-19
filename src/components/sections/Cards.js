import React from 'react'
import CardItem from '../reusables/CardItem'
import './Cards.css'
import loopmania from '../../images/loopmania.PNG'
import website from '../../images/personalweb.PNG'
import stimpact from '../../images/stimpact.jpg'
import flockr from '../../images/flockr.png'
import flatpack from '../../images/flatpack.PNG'

function Cards() {
    return (
        <div className="cards">
            <h1 className="title">selected projects</h1>
            <div className="cards__container">
                <ul className="cards__items">
                    <CardItem 
                        src={loopmania}
                        text="Videogame created using OOP (Java) and JFX"
                        label="Game"
                        path='/projects'
                    />
                    <CardItem 
                        src={website}
                        text="Personal website created with HTML/CSS/JavaScript (REACT)"
                        label="Website"
                        path='/projects'
                    />
                    <CardItem 
                        src={stimpact}
                        text="Developed a neuralstimulator to be used on animals (C/Python/Kivy)"
                        label="Firmware/Software"
                        path='/projects'
                    />
                    <CardItem 
                        src={flockr}
                        text="Developed a communication platform similar to slack/discord (Python/Flask)"
                        label="Frontend/Backend"
                        path='/projects'
                    />
                    <CardItem 
                        src={flatpack}
                        text="Developed modular furniture targeting the problem of waste"
                        label="Design/Development"
                        path='/projects'
                    />
                </ul>
            </div>
        </div>
    )
}

export default Cards
