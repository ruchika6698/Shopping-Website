import { createStore, applyMiddleware, compose } from 'redux';
import { ProductListReducer } from "../reducer/productList_Reducer";
import thunk from 'redux-thunk';
 
const initialState = {};

const middleware = [thunk];
const store = createStore(
    ProductListReducer,
    compose(
        applyMiddleware(...middleware)
    )
);

export default store;