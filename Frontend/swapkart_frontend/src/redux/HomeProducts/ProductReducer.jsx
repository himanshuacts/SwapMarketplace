import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from "./ActionType";

const initialState = {
    loading: true,
    data: [],
    error: ''
}

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_PRODUCT_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }

        case FETCH_PRODUCT_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload
            }

        default:
            return state
    }
}