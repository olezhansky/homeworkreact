import React, {Component} from 'react'
import  styles from './ProductItem.module.scss'


class ProductItem extends Component {

    state = {
        iconFill: false
    }   

    changeIconFill = () => {
        this.setState(state => {
            return { 
                iconFill: !state.iconFill
            }
        })
    }
    
    

    render() {
        return (
                <li className={styles.ProductItem}>
                    <div className={styles.ProductItemImg}>
                        <img 
                            src={"db/" + this.props.product.img}
                        />
                    </div>
                    
                    <div className={styles.ProductItemName}>
                        {this.props.product.name}
                    </div>
                     <div className={styles.Star} onClick={this.changeIconFill}>

                         
                        {this.state.iconFill ? <i class="fas fa-star" style={{cursor: 'pointer', color: 'purple'}}></i>  :  <i className="far fa-star" style={{cursor: 'pointer', color: 'purple'}}></i>}


                    </div>
                    <div className={styles.ProductItemCode}>
                        Code: {this.props.product.code}
                    </div>
                    <div className={styles.ProductItemBottom}>
                        <div className={styles.ProductItemPrice}>
                            ${this.props.product.price} 
                        </div>
                        <button 
                            onClick={this.props.addToCart}
                            className={styles.Button}>
                                Add to cart
                        </button>
                    </div>
                </li>
        )
    }
}

export default ProductItem