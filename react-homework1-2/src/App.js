import React, {Component} from 'react'
import style from './App.module.scss'
import Button from './components/UI/Button/Button'
import Modal from './components/ModalComponents/Modal/Modal'
import Products from './components/Cards/Products/Products'
import getProducts from './api/getProducts'


class App extends Component {

  state = {
    products: [],
    isOpenModal1: false,
    isOpenModal2: false,
    isLoadingProducts: true
  }

  // componentDidMount() {
  //   fetch('db/db.json')
  //   .then(response => response.json())
  //   .then(products => {
  //       this.setState({
  //         products, isLoadingProducts: false
  //       })
  //   })
  // }
  componentDidMount() {
    getProducts()
      .then(products => {
        this.setState({products: products, isLoadingProducts: false})
      })
  }


  openModal1 = () => {
    this.setState({isOpenModal1: true})
  }
  closeModal1 = () => {
      this.setState({isOpenModal1: false})
  }
  openModal2 = () => {
      this.setState({isOpenModal2: true})
  }
  closeModal2 = () => {
      this.setState({isOpenModal2: false})
  }



  render() {
    return (
      <div className={style.App}>
        <h1 style={{color: '#fff', textAlign: 'center'}}>Product cards</h1>
        {!this.state.isLoadingProducts && 
          <Products 
            products={this.state.products}
            addToCart={this.openModal1}
          />
        }
        {/* Modal window 1 */}
        {this.state.isOpenModal1 &&
            <Modal 
              onClick={this.closeModal1}
              header="First Modal"
              closeButton={this.closeModal1} 
              text="Once you delete this file, it won’t be possible to undo this action. Are you sure you    want to delete it?"
              actions={
                <>
                  <Button text="Ok" onClick={this.closeModal1}/>
                  <Button text="Cancel" onClick={this.closeModal1}/>
                </>
              }
            />
        }
        {/* =============================== */}

        {/* Modal window2 */}
        {this.state.isOpenModal2 &&  
         <Modal 
            onClick={this.closeModal2}
            header="Second Modal"
            closeButton={this.closeModal2} 
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rerum."
            actions={
              <>
                <Button text="+"  onClick={this.closeModal2}/>
                <Button text="-"  onClick={this.closeModal2}/>
              </>
            }
          />
        }
      </div>
    )
  }
}

export default App;






// import React, {Component} from 'react'
// import style from './App.module.scss'
// import Button from './components/UI/Button/Button'
// import Modal from './components/ModalComponents/Modal/Modal'


// class App extends Component {

//   state = {
//     isOpenModal1: false,
//     isOpenModal2: false
//   }

//   componentDidMount() {
//     console.log('Hello');
//     fetch('db/db.json')
//     .then(response => response.json())
//     .then(data => {
//       console.log(data)
//       this.setState({
//         data
//       })
//     })
//   }

//   openModal1 = (event) => {
//     this.setState({isOpenModal1: true})
//   }
//   closeModal1 = () => {
//       this.setState({isOpenModal1: false})
//   }
//   openModal2 = () => {
//       this.setState({isOpenModal2: true})
//   }
//   closeModal2 = () => {
//       this.setState({isOpenModal2: false})
//   }

//   render() {
//     return (
//       <div className={style.App}>
//         <h1 style={{color: '#fff'}}>Modal</h1>

//         {/* Modal window 1 */}
//         {this.state.isOpenModal1 &&
//             <Modal 
//               onClick={this.closeModal1}
//               header="First Modal"
//               closeButton={this.closeModal1} 
//               text="Once you delete this file, it won’t be possible to undo this action. Are you sure you    want to delete it?"
//               actions={
//                 <>
//                   <Button text="Ok" onClick={this.closeModal1}/>
//                   <Button text="Cancel" onClick={this.closeModal1}/>
//                 </>
//               }
//             />
//         }
//         {/* =============================== */}

//         {/* Modal window2 */}
//         {this.state.isOpenModal2 &&  
//          <Modal 
//             onClick={this.closeModal2}
//             header="Second Modal"
//             closeButton={this.closeModal2} 
//             text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rerum."
//             actions={
//               <>
//                 <Button text="+"  onClick={this.closeModal2}/>
//                 <Button text="-"  onClick={this.closeModal2}/>
//               </>
//             }
//           />
//         }
//         {/* =============================== */}

//         {/* Buttons */}
//         <div className={style.buttonWrapper}> 
//           <Button 
//             backgroundColor='green'
//             text="Open first modal" 
//             onClick={this.openModal1}
//           />
//           <Button 
//             backgroundColor='tomato'
//             text="Open second modal" 
//             onClick={this.openModal2}
//           />
//         </div>
//          {/* =============================== */}
//       </div>
//     )
//   }
// }

// export default App;

