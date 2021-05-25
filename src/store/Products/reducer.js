const initialState = []
const initialStateProductsLoading = true

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return action.payload.products
        default:
            return state
    }
}

export const productsLoadingReducer = (state = initialStateProductsLoading, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return false
        default:
            return state
    }
}
 
 
