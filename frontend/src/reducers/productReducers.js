
export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case 'PRODUCT_LIST_REQUEST':
            return { loading: true, products: [] }
        case 'PRODUCT_LIST_SUCCESS':
            return { loading: false, products: action.payload }
        case 'PRODUCT_LIST_FAIL':
            return { loading: false, error: action.paylod }
        default:
            return state;
    }
}
export const productDetailReducer = (state = { product: { reviews: [] } }, action) => {
    switch (action.type) {
        case 'PRODUCT_DETAIL_REQUEST':
            return { loading: true, ...state }
        case 'PRODUCT_DETAIL_SUCCESS':
            return { loading: false, product: action.payload }

        case 'PRODUCT_DETAIL_FAILE':
            return { loading: false, product: action.payload }
        default:
            return state
    }
}

