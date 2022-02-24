import {
    ADD_PRODUCT,
    UPDATE_PRODUCT_QUANTITY,
    DELETE_PRODUCT,
} from "./action-types";

export const addProduct = (data) => ({
    type: ADD_PRODUCT,
    data,
});

export const updateProductQuantity = (data) => ({
    type: UPDATE_PRODUCT_QUANTITY,
    data,
});

export const deleteProduct = (idx) => ({
    type: DELETE_PRODUCT,
    idx,
});


