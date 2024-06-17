import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useShop from "../../store/ShopContext";


const CatalogCard = ({ title, price, image, link }) => {
  // данные из initialstate по любимым играм
  const { favourites, addToFavourites, removeToFavourites } = useShop();

  const [isFavourites, setIsFavourites] = useState(false);
   // есть ли товар в понравившихся
  useEffect(() => {
    const favouritesIsIn = favourites.find((el) => el.title === title);
    if (favouritesIsIn) {
      setIsFavourites(true);
    } else setIsFavourites(false);
  });

  const handleClick = () => {
    // товар, который добавляется\удаляется
    const favourites = {
      title: title,
      price: price,
      link: link,
      image: image,
    };
    if (isFavourites) {
      removeToFavourites(favourites);
    } else {
      addToFavourites(favourites);
    }
  };

  return (
    <div className="game-preview">
      <Link to={`/${link}`}>
        <div className="game-preview-wrapper">
          <img src={image} />
        </div>
      </Link>
      <div className="game-preview-desc">
        <div className="game-preview-desc-title">{title}</div>
        <div className="game-preview-desc-price">{price}</div>
        <div className="overlay">
          <button onClick={handleClick} className="button">
            {isFavourites ? "Remove To Favourites" : "Add To Favourites"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatalogCard;
