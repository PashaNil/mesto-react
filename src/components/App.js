import React from 'react';
import "../index.css";

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
  // Открытие попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  //Отображение картинки при клике
  const [selectedCard, setSelectedCard] = React.useState(null)

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  //Закрытие попапов
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard(null)
  }

  // Обработчик закрытия попапов по оверлею
  function closePopupOverlay(evt) {
    if (evt.target.classList.contains("popup_opened") || evt.target.classList.contains('popup__close-icon')) {
      closeAllPopups();
    }
  }

  //Обработчик события при клике на картинку
  function handleCardClick(card) {
    setSelectedCard(card)
  }

  return (
    <body className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          button="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          closeOverlay={closePopupOverlay}
        >
          <input className="popup__input popup__input_type_name" type="text" id="name" name="name" placeholder="Имя"
            minLength="2" maxLength="40" required />
          <span className="popup__input-error name-error"></span>
          <input className="popup__input popup__input_type_job" type="text" id="job" name="about"
            placeholder="Род занятий" minLength="2" maxLength="200" required />
          <span className="popup__input-error job-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="add-cards"
          title="Новое место"
          button="Сохранить"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          closeOverlay={closePopupOverlay}
        >
          <input className="popup__input popup__input_type_card-title" type="text" id="title" name="name"
            placeholder="Название места" minLength="2" maxLength="30" required />
          <span className="popup__input-error title-error"></span>
          <input className="popup__input popup__input_type_card-link" type="url" id="link" name="link"
            placeholder="Ссылка на картинку" required />
          <span className="popup__input-error link-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="confirmation"
          title="Вы уверены?"
          button="Да"
          onClose={closeAllPopups}
          closeOverlay={closePopupOverlay}
        >
        </PopupWithForm>

        <PopupWithForm
          name="avatar-edit"
          title="Обновить аватар"
          button="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          closeOverlay={closePopupOverlay}
        >
          <input className="popup__input popup__input_type_avatar" type="url" id="avatar" name="avatar"
            placeholder="Ссылка на изображение" required />
          <span className="popup__input-error avatar-error"></span>
        </PopupWithForm>

        <ImagePopup
          onClose={closeAllPopups}
          closeOverlay={closePopupOverlay}
          card={selectedCard}
        />

      </div>
    </body>
  )
}

export default App;
