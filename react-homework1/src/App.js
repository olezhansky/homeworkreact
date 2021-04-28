import React, {Component} from 'react'
import style from './App.module.scss'
import Button from './component/Button/Button'
import Modal from './component/Modal/Modal'
import Backdrop from './component/Backdrop/Backdrop'


class App extends Component {

  state = {
    isOpenModal1: false,
    isOpenModal2: false,
    header1: 'First Modal',
    header2: 'Second Modal',
    text1: 'Once you delete this file, it won’t be possible to undo this action. Are you sure you    want to delete it?',
    text2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rerum.'
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
        <h1 style={{color: '#fff'}}>Hello React</h1>
        {this.state.isOpenModal1 &&
        <> 
        <>
          <Modal 
            header={this.state.header1}
            closeButton={this.closeModal1} 
            text={this.state.text1}
            actions={
              <>
                <Button text="Ok"/>
                <Button text="Cancel"/>
              </>
            }
          />
          </>
          </>
        }
        {this.state.isOpenModal2 &&  
        <>
         {/* <Backdrop /> */}
         <Modal 
          header={this.state.header2}
          closeButton={this.closeModal2} 
          text={this.state.text2}
          actions={
            <>
              <Button text="+"/>
              <Button text="-"/>
            </>
          }
       />
       </>
        }
        <div className={style.buttonWrapper}> 
          <Button 
            backgroundColor='green'
            text="Open first modal" 
            onClick={this.openModal1}
          />
          <Button 
            backgroundColor='tomato'
            text="Open second modal" 
            onClick={this.openModal2}
          />
        </div>
      </div>
    )
  }
}

export default App;
