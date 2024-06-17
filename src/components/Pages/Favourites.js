import React from "react";
import useShop from "../../store/ShopContext";
import CatalogCard from "./CatalogCard.js";

const Catalog = () => {
  const { favourites } = useShop();
  return (
    <main className="page">
      <div className="block-game">
        <div className="block-game-title">Избанное </div>
        <div className="block-game-preview">
          {favourites.map((card) => (
            <CatalogCard
              key={card.link}
              link={card.link}
              image={card.image}
              price={card.price}
              title={card.title}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Catalog;
