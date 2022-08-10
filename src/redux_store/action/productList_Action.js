export const PRODUCT_LIST = "PRODUCT_LIST";
export const PLACE_ORDER = 'PLACE_ORDER'

export const ProductList_Action= (url) => async (dispatch) => {
    const response = await fetch(url)
    const data = await response.json()
    dispatch({
        type: PRODUCT_LIST,
        payload : data
    });
}

export const Place_Order= (data) => async (dispatch) => {
    dispatch({
        type: PLACE_ORDER,
        payload : data
    });
}