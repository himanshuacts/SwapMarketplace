import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { ProductReducer } from './ProductReducer';
import {ProductReducer} from './HomeProducts/ProductReducer'
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({ prodList: ProductReducer, })

// const store = configureStore({ reducer: rootreducer, middleware: [logger, thunk] });
const middleware = (getDefaultMiddleware) => {
    return [...getDefaultMiddleware(), thunk, logger];
};

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => middleware(getDefaultMiddleware),
});

export default store;