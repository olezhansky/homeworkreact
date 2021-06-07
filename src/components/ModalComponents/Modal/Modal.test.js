import Modal from './Modal'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { rootReducer } from '../../../store/rootReducer'

let store = createStore(rootReducer, {
    products: [],
    isOpenModalForAddToCart: false,
    dataForModalAddProductToCart: [],
    cartProducts: [],
    isOpenModalForDeleteProductWithCart: false,
    productForModalDeleteWithCart: [],
    favoriteProducts: [],
})

describe('Modal component', () => {
    it('should render correctly', () => {
        let store = createStore(rootReducer, {
            products: [],
            isOpenModalForAddToCart: false,
            dataForModalAddProductToCart: [],
            cartProducts: [],
            isOpenModalForDeleteProductWithCart: false,
            productForModalDeleteWithCart: [],
            favoriteProducts: [],
        })
        render(<Provider store={store}><Modal /></Provider>)
    })

    it('should render correctly with dataForModalCard.color', () => {
        let store = createStore(rootReducer, {
            products: [],
            isOpenModalForAddToCart: false,
            dataForModalAddProductToCart: [],
            cartProducts: [],
            isOpenModalForDeleteProductWithCart: false,
            productForModalDeleteWithCart: [],
            favoriteProducts: [],
        })
        const { getByText } = render(<Provider store={store}><Modal dataForModalCard={{color: 'Test'}}/></Provider>)
        getByText('Test')
    })

    it('should render correctly with dataForModalCard', () => {
        let store = createStore(rootReducer, {
            products: [],
            isOpenModalForAddToCart: false,
            dataForModalAddProductToCart: [],
            cartProducts: [],
            isOpenModalForDeleteProductWithCart: false,
            productForModalDeleteWithCart: [],
            favoriteProducts: [],
        })
        const { getByText } = render(<Provider store={store}><Modal dataForModalCard={{ code: 'Test', color: 'Test',  id: 4, img: 'Test', name: 'Test', price: 'Test' }}/></Provider>)
    })
})

