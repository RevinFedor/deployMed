import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice'; // Путь к вашему productSlice

const store = configureStore({
    reducer: {
        products: productReducer,
    },
});

export default store;
