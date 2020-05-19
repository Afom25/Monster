import React from 'react';
export const Card = props => (
    <div className='card-container'>
        <img alt='monster'
        alt='monster'
        src={`https://robohash.org/${props.monster.id}?set=set&size=180x180`}/>
        
        <h3>{props.monster.name}</h3>
        <h6>{props.monster.email}</h6>

    </div>
)