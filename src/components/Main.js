import React from 'react';
import avatarPens from '../images/Avatar-pens.svg';
import Card from './Card';
import Api from '../utils/Api';

function Main(props) {
  const [userName, setUserName] = React.useState(null);
  const [userDescription, setUserDescription] = React.useState(null);
  const [userAvatar, setUserAvatar] = React.useState(null);
  const [cards, setCards] = React.useState([]);

  // Запрос данных для профайла
  React.useEffect(() => {

    Api.getSelfData()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(`Ошибка запроса: ${err}`)
      });

  }, [])

  // Запрос на карточки
  React.useEffect(() => {

    Api.getInitialCards()
      .then((dataCards) => {
        setCards(
          dataCards.map((card) => ({
            name: card.name,
            link: card.link,
            likes: card.likes,
            cardId: card._id
          }))
        )
      })
      .catch((err) => {
        console.log(`Ошибка запроса: ${err}`)
      });

  }, [])


  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src={userAvatar} alt="Аватар профиля" />
            <button className="profile__avatar-edit" type="button" onClick={props.onEditAvatar}>
              <img className="profile__avatar-pen" src={avatarPens}
                alt="ручка редактирования" />
            </button>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <button className="profile__edit-button opacity-hover" type="button"
              aria-label="Редактирование информации" onClick={props.onEditProfile}></button>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button opacity-hover"
          type="button" aria-label="Добавить карточку" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
        {cards.map((cardItem) => (
          <Card
            key={cardItem.cardId}
            name={cardItem.name}
            link={cardItem.link}
            likes={cardItem.likes}
            onCardClick={props.onCardClick}
          />
        ))}
      </section>
    </main>
  )
}

export default Main;