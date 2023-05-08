import React from 'react';

function Card(props) {

  return (
    <article className="element">
      <img className="element__mask-group" src={props.link} alt={props.name} onClick={(evt)=> props.onCardClick(props)}/>
      <button className="element__trash-button" type="button"></button>
      <div className="element__rectangle">
        <h2 className="element__title">{props.name}</h2>
        <div className="element__container-like">
          <button className="element__like-button" type="button"></button>
          <p className="element__like-number">{props.likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;
