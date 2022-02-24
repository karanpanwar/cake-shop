import {combineReducers} from "redux";
import {
    ADD_PRODUCT,
    UPDATE_PRODUCT_QUANTITY,
    DELETE_PRODUCT,
} from "./action-types";


const setProductsList = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
}
const getProductsList = key => {
    return JSON.parse(sessionStorage.getItem(key));
}

const initialState = {
    lists: getProductsList('productList') ? getProductsList('productList') : [],
};

const list = function (state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT: {
            const product = action.data;
            const idx = state.lists.findIndex(item => item.id === product.id);
            if (idx !== -1) return state;
            setProductsList('productList', [...state.lists, product]);
            return {
                ...state,
                lists: [...state.lists, product],
            };
        }
        case UPDATE_PRODUCT_QUANTITY: {
            const {id, qty} = action.data;
            const copy = {...state};
            const idx = copy.lists.findIndex(item => item.id === id);
            const newLists = [...copy.lists];
            newLists[idx].qty = qty;
            setProductsList('productList', newLists);
            return {...state, lists: newLists};
        }
        case DELETE_PRODUCT: {
            const idx = action.idx;
            const copy = {...state};
            const newLists = [...copy.lists];
            newLists.splice(idx, 1);
            setProductsList('productList', newLists);
            return {
                ...state,
                lists: newLists,
            };
        }
        default: {
            return state;
        }
    }
};

export default combineReducers({list});
