import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>selected projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items1">

                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src="images/loopmania.png"
                            text="Videogame created using OOP (java) and JFX"
                            label="Game"
                            path='/projects'
                        />
                        <CardItem 
                            src="images/personalweb.png"
                            text="Personal website created with HTML/CSS/JavaScript (REACT)"
                            label="Website"
                            path='/projects'
                        />
                        <CardItem 
                            src="images/stimpact.jpg"
                            text="Developed a neuralstimulator to be used on animals (C/Python/Kivy)"
                            label="Firmware/Software"
                            path='/projects'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
