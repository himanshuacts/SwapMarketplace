import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from "./ActionType"
import axios from 'axios'

const fetchProductRequest = () => {
    return {
        type: FETCH_PRODUCT_REQUEST
    }
}

const fetchProductSuccess = (data) => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: data
    }
}

const fetchProductFailure = (err) => {
    return {
        type: FETCH_PRODUCT_FAILURE,
        payload: err
    }
}

export const fetchProductList = () => {
    return (dispatch) => {
        dispatch(fetchProductRequest);
        axios.get('http://localhost:8080/swapkart/').then(res => {
            let _list = res.data
            dispatch(fetchProductSuccess(_list))
        }).catch(err => {
            dispatch(fetchProductFailure(err.message))
        })
    }
}