import { SwipeableDrawer } from '@mui/material'
import axios from '../Axios';
import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import '../assets/tunderCards.css'

function TunderCards() {

    const [lastDirection, setLastDirection] = useState("");
    const [people, setPeople] = useState([]);

    //Get Data from ackend using Axios instance already created in ../Axios.jsx

    async function fetchData(){
        const req = await axios.get('/tunder/cards');
        setPeople(req.data);
    };

    useEffect(() => {
        fetchData();
    }, []);   

    const swiped = (direction, nameToDelete) => {
        console.log("Removed from Screen" + nameToDelete);
        setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + "Left the Screen");
    };

  return (
    <div className='tunderCards'>
        <div className="tunderCardsContainer">
            {people.map((person) => (
                <TinderCard
                className='swipe'
                key={person.name}
                preventSwipe={['up','down']}
                onSwipe={(dir)=> swiped(dir,person.name)}
                onCardLeftScreen={()=> outOfFrame(person.name)}>
                    <div className="card" style={{backgroundImage: `url(${person.imgUrl})`}}>
                        <h3>
                            {person.name}
                        </h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    </div>
  )
}

export default TunderCards;