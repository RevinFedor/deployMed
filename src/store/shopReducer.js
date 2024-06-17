export const initialState = {
  favourites: [],
  cartGames: [],
  total: 0,
  refer:''
};

const ShopReducer = (state,action)=>{
    const {type,payload} = action

    switch (type) {
        case "ADD_FAVOURITES":
            console.log('ADD_FAVOURITES', payload);
            return {
              ...state,
              favourites: payload.favourites,
            };
            
        case "REMOVE_FAVOURITES":
            console.log("REMOVE_FAVOURITES", payload);
            return {
              ...state,
              favourites: payload.favourites,
            }; 
        case "ADD_TO_CART":
            console.log("ADD_TO_CART", payload);
            return {
              ...state,
              cartGames: payload.cartGames,
            }; 
        case "REMOVE_TO_CART":
            console.log("REMOVE_TO_CART", payload);
            return {
              ...state,
              cartGames: payload.cartGames,
            }; 
        case "UPDATE_TO_CART":
            console.log("UPDATE_TO_CART", payload);
            return {
              ...state,
              total: payload.total,
              totalCart: payload.totalCart,
            }; 
        default:
            break;
    }
}

export default ShopReducer;