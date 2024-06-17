import { createContext, useReducer, useContext } from 'react';
import ShopReducer, { initialState } from './shopReducer';

const ShopContext = createContext();

export const ShopProvider = (props) => {
    const [state, dispatch] = useReducer(ShopReducer, initialState);

    const addToFavourites = (favourite) => {
        const updateFavourites = state.favourites.concat(favourite);

        return dispatch({
            type: 'ADD_FAVOURITES',
            payload: {
                favourites: updateFavourites,
            },
        });
    };
    const removeToFavourites = (favourites) => {
        const updateFavourites = state.favourites.filter(
            (currentfavourite) => currentfavourite.title !== favourites.title
        );
        return dispatch({
            type: 'REMOVE_FAVOURITES',
            payload: {
                favourites: updateFavourites,
            },
        });
    };

    // текущая товара
    const addToCart = (game) => {
        let updateCartGames = state.cartGames.concat(game);

        // возвращает индекс товары, если ее добавить второй раз
        const existingCartItemIndex = state.cartGames.findIndex(
            (gameCart) => gameCart.link === game.link
        );
        const existingCartItem = state.cartGames[existingCartItemIndex];

        // есть ли это элемент в корзине
        if (existingCartItem) {
            // текущая товара +1 количество
            let updateCartGame = {
                ...existingCartItem,
                amount: existingCartItem.amount + game.amount,
            };
            // обнолвние текущего массива + замена товары (с новым amount)
            updateCartGames = [...state.cartGames];
            updateCartGames[existingCartItemIndex] = updateCartGame;
        }

        updateToCart(updateCartGames);
        return dispatch({
            type: 'ADD_TO_CART',
            payload: {
                cartGames: updateCartGames,
            },
        });
    };

    // текущий массив товар
    const removeToCart = (game, removeall) => {
        let updateCartGames;

        // возвращает индекс товары, если она уже в корзине
        const existingCartItemIndex = state.cartGames.findIndex(
            (gameCart) => gameCart.link === game.link
        );
        const existingCartItem = state.cartGames[existingCartItemIndex];

        // функция полного дулаения или если в корзине 1 товара
        if (existingCartItem.amount === 1 || removeall) {
            updateCartGames = state.cartGames.filter(
                (currentGame) => currentGame.title !== game.title
            );
            updateToCart(updateCartGames);
            return dispatch({
                type: 'REMOVE_TO_CART',
                payload: {
                    cartGames: updateCartGames,
                },
            });
        }
        // функция удаения на -1
        if (existingCartItem.amount > 1) {
            // текущая товара -1 количество
            let updateCartGame = {
                ...existingCartItem,
                amount: existingCartItem.amount - game.amount,
            };
            // обнолвние текущего массива + замена товары (с новым amount)
            updateCartGames = [...state.cartGames];
            updateCartGames[existingCartItemIndex] = updateCartGame;
        }

        updateToCart(updateCartGames);
        return dispatch({
            type: 'REMOVE_TO_CART',
            payload: {
                cartGames: updateCartGames,
            },
        });
    };

    const updateToCart = (cartGames) => {
        let total = 0;
        let totalCart = 0;
        cartGames.forEach((game) => {
            total += +game.price.replace(/\s/g, '') * game.amount;
            totalCart += game.amount;
        });
        return dispatch({
            type: 'UPDATE_TO_CART',
            payload: {
                total,
                totalCart,
            },
        });
    };

    const value = {
        favourites: state.favourites,
        addToFavourites,
        removeToFavourites,
        cartGames: state.cartGames,
        total: state.total,
        totalCart: state.totalCart,
        addToCart,
        removeToCart,
    };
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

const useShop = () => {
    return useContext(ShopContext);
};

export default useShop;
