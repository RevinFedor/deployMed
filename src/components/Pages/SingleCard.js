import React, { useEffect, useState } from "react";
import stat from "../../img/stat.png";
import arrival from "../../img/arrival.png";
import basket2 from "../../img/basket2.png";
import whatsapp from "../../img/whatsapp 2.png";
import { Link, useParams } from "react-router-dom";

import array from "../../store/apteka.products";
import useShop from "../../store/ShopContext";

// Удаление строки из массива
// array.map((el) =>{
//       const description = el.description
//         .substring(el.description.indexOf("указанный в процессе покупки. "))
//         .slice(15,el.description.indexOf("указанный в процессе покупки. "))
//         el.description = description
//     }
//     );
//   console.log(array);

const SingleCard = () => {
  const [state, setState] = useState([]);

  // Динамический роутинг
  const { id } = useParams();
  useEffect(() => {
    const data = array.find((el) =>  el._id.$oid === id);

    setState(data);
    console.log("dsfafasfdsfddsd");
  }, [id]);
  


  const { cartGames, addToCart, removeToCart } = useShop();
  const [isGame, setIsGame] = useState(false);

  useEffect(() => {
    const favouritesIsIn = cartGames.find((el) => el.title === state.title);
    if (favouritesIsIn) {
      setIsGame(true);
    } else setIsGame(false);
  }, [cartGames, state.title]);

  const hadleClick = () => {
    const cartGames = {
        title: state.title,
        price: state.price,
        link: state._id.$oid,
        image: state.image,
        amount: 1,
    };
    if (isGame) {
      removeToCart(cartGames);
    } else addToCart(cartGames);
  };

  const [isHide, setIsHide] = useState(false); // модальное окно whatsapp
  const isModalVisible=()=>{
    setIsHide(!isHide);
  }

  return (
      <main className="page">
          <div className="about_game">
              <div className="colomn_left">
                  <div className="cover">
                      <img src={state.image} />
                  </div>
                  <div className="reviews">
                      <div className="reviews-title">Отзывы</div>
                      <div className="wrapper">
                          <img src={stat} />
                      </div>
                      <div className="reviews-rating">4.7</div>
                      <div className="wrapper">
                          <img src={arrival} />
                      </div>
                  </div>
              </div>
              <div className="colomn_right">
                  <div className="cart__information">
                      <div className="cart__information_title">
                          {state.title}
                      </div>
                      <div className="cart__information_price">
                          {state.price} P
                      </div>
                      <div className="cart__information_rating">
                          <div className="wrapper">
                              <img src={stat} />
                          </div>
                          <div className="reviews-rating">4.7</div>
                      </div>
                  </div>
                  <div className="card_buttons">
                      <button onClick={hadleClick} className="add-to-basket">
                          <div className="wrapper">
                              <img src={basket2} />
                          </div>
                          <div className="add-to-basket text">
                              {isGame
                                  ? 'Удалить из корзины'
                                  : 'Добавить в корзину'}
                          </div>
                      </button>
                      <button className="checkout">
                          <Link className="checkout text" to="/ordering">
                              Оформить заказ
                          </Link>
                      </button>
                      <button className="contact" onClick={isModalVisible}>
                          <div className="wrapper">
                              <img src={whatsapp} />
                          </div>
                          <div className="contact text">Связаться</div>
                      </button>
                  </div>
                  <div className="article">
                      <h1>Описание и характеристики</h1>
                      <h2>Жанры</h2>
                      <span className="article__genres">
                        <p className="article__genre">{state.genre}</p>
                          {/* {state.genre
                              ? state.genre.map((el, index) => (
                                    <p key={index} className="article__genre">
                                        {el}
                                    </p>
                                ))
                              : 'Не указан'} */}
                      </span>
                      {state.detail ? state.detail.map((el) => (
                          <ul>
                              <h4 className="font-bold">{el.header}</h4>
                              <li>{el.description}</li>
                          </ul>
                      )) : ""}
                  </div>
              </div>
          </div>

          {isHide && (
              <>
                  <div className="backdrop" onClick={isModalVisible}></div>
                  <div className="modal">Номер телефона: +79534531193</div>
              </>
          )}
      </main>
  );
};

export default SingleCard;
