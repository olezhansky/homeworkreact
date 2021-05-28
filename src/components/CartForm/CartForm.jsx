import {useDispatch} from 'react-redux'
import styles from './CartForm.module.scss'
import { Formik } from 'formik'
import * as yup from 'yup'

const CartForm = () => {

const dispatch = useDispatch()

  const handleOnSubmitForm = (values, { setSubmitting}) => {
    dispatch({type: 'SET_USER_DATA', 
      payload: { 
        name: values.name,
        lastName: values.lastName,
        age: values.age,
        address: values.address,
        phone: values.phone
    }})
    dispatch({type: 'CONSOLE_LOG'})
  }

  const validation = yup.object().shape({
    name: yup.string().typeError('Should be string').required('Required'),
    lastName: yup.string().typeError('Should be string').required('Required'),
    age: yup.number().typeError('Should be number').required('Required'),
    address: yup.string().typeError('Should be number').required('Required'),
    phone: yup.number().typeError('Should be number').required('Required')

  })

  return (
    <Formik
      initialValues={{
        name: '',
        lastName: '',
        age: '',
        address: '',
        phone: ''
      }}
      validateOnBlur
      onSubmit={handleOnSubmitForm}
      validationSchema={validation}
    >
      {({values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit}) => (
        <form className={styles.CartForm} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" type="text" onChange={handleChange} onBlur={handleBlur} value={values.name}/>
          {touched.name && errors.name && <p className={styles.Error}>{errors.name }</p>}
        </div>
        
        <div>
          <label htmlFor="lastName">Last name</label>
          <input name="lastName" id="lastName" type="text" onChange={handleChange} onBlur={handleBlur} value={values.lastName}/>
          {touched.lastName && errors.lastName && <p className={styles.Error}>{errors.lastName }</p>}
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input name="age" id="age" type="text" onChange={handleChange} onBlur={handleBlur} value={values.age}/>
          {touched.age && errors.age && <p className={styles.Error}>{errors.age }</p>}
        </div>
        <div>
          <label htmlFor="address">Delivery address </label>
          <input name="address" id="address" type="text" onChange={handleChange} onBlur={handleBlur} value={values.address}/>
          {touched.address && errors.address && <p className={styles.Error}>{errors.address }</p>}
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input name="phone" id="phone" type="text" onChange={handleChange} onBlur={handleBlur} value={values.phone}/>
          {touched.phone && errors.phone && <p className={styles.Error}>{errors.phone }</p>}
        </div>
        <button type="submit" disabled={isSubmitting}>Checkout</button>
        </form>
      )}
    </Formik>
  )
}

export default CartForm