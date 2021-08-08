import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>selected projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/loopmania.png"
                        text="Videogame created using OOP (java) and JFX"
                        label="Game"
                        path='/projects'/>
                        <CardItem 
                        src="images/personalweb.png"
                        text="Personal website created with HTML/CSS/JavaScript (REACT)"
                        label="Website"
                        path='/projects'/>
                        <CardItem 
                        src="images/stimpact.jpg"
                        text="Interdisciplinary project developing a neuralstimulator to be used on animals (C/Python/Kivy)"
                        label="Firmware/Software"
                        path='/projects'/>
                        <CardItem 
                        src="images/flatpack.png"
                        text="Personal design project, developing sustainable furniture targeting the problem of waste"
                        label="Design/development"
                        path='/projects'/>
                        <CardItem 
                        src="images/flockr.png"
                        text="Communication platform similar to that of discord/slack, developed with a functioning frontend/backend"
                        label="Website - Frontend/Backend"
                        path='/projects'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
