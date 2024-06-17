import React from "react";
import { Link } from "react-router-dom";
import useShop from "../store/ShopContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartGames, total } = useShop();
  return (
    <main className="page">
      <div className="basket">
        <div className="basket-title">Корзина</div>
        <div className="delayed">
          {cartGames.map((game) => (
            <CartItem
              key={game.link}
              amount={game.amount}
              image={game.image}
              title={game.title}
              price={game.price}
              link={game.link}
            />
          ))}
        </div>
        <div className="pre-order">
          <div className="total">
            <div>ИТОГ</div>
            <div className="total-price">{total}</div>
          </div>
          <Link to="/ordering">Оформить заказ</Link>
        </div>
      </div>
    </main>
  );
};

export default Cart;
