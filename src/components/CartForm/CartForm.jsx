import { useDispatch, useSelector } from 'react-redux';
import styles from './CartForm.module.scss'

const CartForm = () => {
  const name = useSelector(state => state.userData.name)
  const lastName = useSelector(state => state.userData.lastName)
  const age = useSelector(state => state.userData.age)
  const address = useSelector(state => state.userData.address)
  const phone = useSelector(state => state.userData.phone)

  const dispatch = useDispatch()

  const handleSetUserData= event => {
    const name = event.target.name;
    dispatch({type: 'SET_USER_DATA', payload: {[name]:event.target.value}})
  }

  const handleOnSubmit = event => {
    event.preventDefault()
    dispatch({type: 'CONSOLE_LOG'})
  }

  return (
      <form className={styles.CartForm} onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" type="text" onChange={handleSetUserData} value={name}/>
        </div>
        <div>
          <label htmlFor="lastName">Last name</label>
          <input name="lastName" id="lastName" type="text" onChange={handleSetUserData} value={lastName}/>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input name="age" id="age" type="number" onChange={handleSetUserData} value={age}/>
        </div>
        <div>
          <label htmlFor="address">Delivery address </label>
          <input name="address" id="address" type="text" onChange={handleSetUserData} value={address}/>
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input name="phone" id="phone" type="number" onChange={handleSetUserData} value={phone}/>
        </div>
        <button>Checkout</button>
      </form>
  )
}

export default CartForm