import React, { useState } from "react";
import visa from "../../img/visa.png";
import arrival from "../../img/arrival.png";
import promo from "../../img/promo.png";
import arrival2 from "../../img/arrival2.png";
import useShop from "../../store/ShopContext";

const OrderingPage = () => {
  const { cartGames, total } = useShop();
  const [hideOrder, setHideOrder] = useState(true);
  return (
    <>
      <main className={`page ${hideOrder ? "" : "displaynone"}`}>
        <div className="ordering">
          <div className="ordering-title">Оформление заказа</div>
          <div className="customer-info">
            <div className="customer-info-title">Информация о клиенте</div>
            <input type="text" placeholder="Электронная почта" />
            <input type="text" placeholder="ФИО" />
          </div>
          <div className="order">
            <div className="order-title">Ваш заказ</div>
            {cartGames.map((game) => (
              <div className="string" key={game.link}>
                <div className="string-icon">{game.amount}×</div>
                <div className="string-text">{game.title}</div>
                <div className="string-last">₽ {game.price} </div>
              </div>
            ))}

            <div className="string">
              <div className="string-icon"></div>
              <div className="string-text">К оплате</div>
              <div className="string-last">₽ {total} </div>
            </div>
          </div>
          <div className="payment">
            <div className="payment-title">Способ оплаты</div>
            <div className="string">
              <div className="string-icon">
                <img src={visa} />
              </div>
              <div className="string-text">Счет на kaspi.kz</div>
              <div className="string-last">
                <img src={arrival} />
              </div>
            </div>
            <div className="string">
              <div className="string-icon">
                <img src={promo} />
              </div>
              <div className="string-text lite">Есть промокод?</div>
              <div className="string-last">
                <img src={arrival2} />
              </div>
            </div>
          </div>
          <div className="customer-number">
            <div className="customer-number-title">Номер получателя</div>
            <input type="text" placeholder="+7 ___ ___ __ __" />
          </div>
          <button id="finish-order" onClick={() => setHideOrder(!hideOrder)}>
            Закончить оформление
          </button>
        </div>
      </main>
      <div className={`hideOrder ${hideOrder ? "displaynone" : ""}`}>
        <span className="hideOrder__title">
          Номер вашего заказа №123123, с Вами свяжется наш менеджер.
        </span>
        <button
          className="hideOrder__btn"
          onClick={() => setHideOrder(!hideOrder)}
        >
          Отменить оформление
        </button>
      </div>
    </>
  );
};

export default OrderingPage;
