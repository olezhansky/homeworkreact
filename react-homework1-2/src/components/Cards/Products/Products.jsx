import React, {Component} from 'react'
import styles from './Products.module.scss'
import ProductItem from '../ProductItem/ProductItem'

class Products extends Component {
    render() {
        console.log(this.props.products);
        return (
            <ul className={styles.Products}>
                {this.props.products.map((product) => {
                    return (
                        <ProductItem
                            addToCart={this.props.addToCart}
                            key={product.id}
                            product={product}
                        />
                    )
                })}
            </ul>
        )
    }
}

export default Products