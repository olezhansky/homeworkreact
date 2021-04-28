import React from 'react'
import style from'./Modal.module.scss'
import closeImg from '../../img/closeImg.png' // relative path to image 
import Backdrop from '../Backdrop/Backdrop.jsx'


class Modal extends React.Component {


    render () {
        return (
            <> 
                <div className={style.Modal} 
                >
                    <div className={style.ModalBody}>
                        <div className={style.ModalTop}>
                            <h1 className={style.title}>{this.props.header}</h1>
                            <button 
                                className={style.close}
                                onClick={this.props.closeButton}
                            >
                                <img src={closeImg} alt={"closeImg"}/> 
                            </button>
                        </div>
                        <div className={style.ModalContent}>
                            <p className={style.text}>{this.props.text}</p>
                            {this.props.actions}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Modal

