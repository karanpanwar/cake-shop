import {
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    DELETE_ALL_PRODUCT,
} from "./action-types";

export const addProduct = (data) => ({
    type: ADD_PRODUCT,
    data,
});

export const updateProduct = (data) => ({
    type: UPDATE_PRODUCT,
    data,
});

export const deleteProduct = (idx) => ({
    type: DELETE_PRODUCT,
    idx,
});

export const deleteAllProduct = () => ({
    type: DELETE_ALL_PRODUCT,
});

