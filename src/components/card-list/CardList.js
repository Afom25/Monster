import React from 'react';
import {Card} from '../card/Card'

export const CardList =props => {

    return <div> 
        <div className="container text-center">
      
      <div className='row'>
        <div class="card" id='card'>
        {
        props.monsters.map(monster => (
          <Card key={monster.id} monster={monster}/>
        ))
      }
    </div>
    </div>
    </div></div>
}