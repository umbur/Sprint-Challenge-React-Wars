import React from "react";

const Character = props => {
  return (
    <div className='char-container'>
    <div className="character">
      <div className="character-name"> 
      <ul>
      <li>{props.character.name}</li>
      </ul>
      </div>
      <div className="character-data">
      <div className='gender'>
       <span>Gender:</span> {props.character.gender}<br>
       </br>
       </div>
       <div className='birth'>
       <span>Birth Year:</span> {props.character.birth_year}<br>
       </br>
       </div>
       <div className='height'>
       <span>Height:</span> {props.character.height}<br>
       </br>
       </div>
       <div className='mass'>
       <span>Mass:</span> {props.character.mass}<br>
       </br>
       </div>
       <div className='homeworld'>
       <span>Homeworld:</span> {props.character.homeworld}
       </div>

      </div>
    </div>
    </div>
    
  );
};
 export default Character;