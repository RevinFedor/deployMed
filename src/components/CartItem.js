import deleteImg from "../img/delete.png";
import React, { useEffect, useState } from "react";
import useShop from "../store/ShopContext";

const CartItem = (props) => {
    const {
      image, title, price, link,amount
    } = {...props}
  // данные из initialstate по корзине
  const { cartGames, addToCart, removeToCart } = useShop();

  const [isAdded, setIsAdded] = useState(false);
  
  // // есть ли товар в корзине
  useEffect(() => {
    const CartIsIn = cartGames.find((el) => el.title === title);
    if (CartIsIn) {
      setIsAdded(true);
    } else setIsAdded(false);
  });

  const handleClickAdd = () => {
    // товар, который добавляется
    const cartGamesItem = {
      title: title,
      price: price,
      link: link,
      image: image,
      amount: 1,
    };
     return addToCart(cartGamesItem);
  };
  const removeClickAdd = () => {
    // товар, который удаляется
    const cartGamesItem = {
      title: title,
      price: price,
      link: link,
      image: image,
      amount: 1,
    };
     removeToCart(cartGamesItem);
  };
  const removeClickAddAll = () => {
    // товар, который удаляется
    const cartGamesItem = {
      title: title,
      price: price,
      link: link,
      image: image,
      amount: 1,
    };
     removeToCart(cartGamesItem,true);
  };
  return (
      <div className="added-game">
          <div className="added-game-cover">
              <img src={image} />
          </div>
          <div className="added-game-delete" onClick={removeClickAddAll}>
              <img src={deleteImg} />{' '}
          </div>
          <div className="added-game-name">{title}</div>
          <div className="added-game-price">{price}</div>
          <div className="added-game-counter">
              <button
                  className="added-game-counter-less"
                  onClick={removeClickAdd}
              >
                  -
              </button>
              <div className="added-game-count">{amount}</div>
              <button
                  className="added-game-counter-more"
                  onClick={handleClickAdd}
              >
                  +
              </button>
          </div>
          <div className="added-game-allprice">
              {+price.replace(/\s/g, '') * amount}
          </div>
      </div>
  );

};

export default CartItem;
