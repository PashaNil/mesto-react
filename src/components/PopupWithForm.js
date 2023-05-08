import React from 'react';

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}
      onClick={props.closeOverlay}>
      <div className="popup__container">
        <button
          className="popup__close-icon opacity-hover"
          type="button"
          aria-label="Закрытие окна"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className={`popup__form popup__form_type_${props.name}`} name={props.name} noValidate>
          <fieldset className="popup__fieldset">
            {props.children}
          </fieldset>
          <button className="popup__button popup__button_disabled" type="submit" aria-label="Сохранить форму"
            disabled>{props.button}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;