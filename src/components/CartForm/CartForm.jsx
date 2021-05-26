import styles from './CartForm.module.scss'

const CartForm = () => {
    return (
        <form className={styles.CartForm}>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text"/>
          </div>
          <div>
            <label htmlFor="lastName">Last name</label>
            <input id="lastName" type="text"/>
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input id="age" type="number"/>
          </div>
          <div>
            <label htmlFor="address">Delivery address </label>
            <input id="address" type="text"/>
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input id="phone" type="number"/>
          </div>
        </form>
    )
}

export default CartForm