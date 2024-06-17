import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        // Считываем данные из файла JSON каждый раз при вызове этого действия
        const data = require('../apteka.products.js');
        return data;
    }
);

const initialState = {
    status: false,
    error: null,
    items: [],
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        resetProduct: (state, action) => {
            state.items = action.payload;
        },
        addProduct: (state, action) => {
            state.items.push(action.payload);
        },
        updateProduct: (state, action) => {
            const index = state.items.findIndex(
                (item) => item._id === action.payload._id
            );
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
        deleteProduct: (state, action) => {
            state.items = state.items.filter(
                (item) => item._id.$oid !== action.payload
            );
            console.log(state.items);
        },
        login: (state, action) => {
            state.status = true;
        },
        logout: (state, action) => {
            state.status = false;
        },
    },
});

export const {
    resetProduct,
    addProduct,
    updateProduct,
    deleteProduct,
    logout,
    login,
} = productSlice.actions;

export default productSlice.reducer;
