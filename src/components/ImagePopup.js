import React from 'react';

function ImagePopup(props){

return(
    <div className={`popup popup_type_card-image ${props.card ? 'popup_opened' : ''}`} onClick={props.closeOverlay}>
    <figure className="popup__figure">
      <button className="popup__close-icon opacity-hover" type="button" aria-label="Закрытие окна" onClick={props.onClose}/>
      <img className="popup__figure-img" src={`${props.card ? props.card.link : "#"}`} alt="" />
      <figcaption className="popup__figurecaption"></figcaption>
    </figure>
  </div>
)
}

export default ImagePopup;