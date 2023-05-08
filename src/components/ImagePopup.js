import React from 'react';

function ImagePopup({card, onClose}){

  // Обработчик закрытия попапов по оверлею
  function closePopupOverlay(evt) {
    if (evt.target.classList.contains("popup_opened") || evt.target.classList.contains('popup__close-icon')) {
      onClose();
    }
  }

return(
    <div className={`popup popup_type_card-image ${card ? 'popup_opened' : ''}`} onClick={closePopupOverlay}>
    <figure className="popup__figure">
      <button className="popup__close-icon opacity-hover" type="button" aria-label="Закрытие окна" onClick={onClose}/>
      <img className="popup__figure-img" src={`${card ? card.link : "#"}`} alt={`${card ? card.name : "#"}`} />
      <figcaption className="popup__figurecaption">{`${card ? card.name : "#"}`}</figcaption>
    </figure>
  </div>
)
}

export default ImagePopup;
