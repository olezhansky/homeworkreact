import React, {Component} from 'react'
import style from'./Modal.module.scss'
import closeImg from '../../../img/closeImg.png'
import Backdrop from '../Backdrop/Backdrop'
import PropTypes from 'prop-types'


class Modal extends Component {
    
    render () {
        const {header, text, closeButton, actions, onClick} = this.props
        return (
            <>
            <div className={style.Modal}>
                <div className={style.ModalBody}>
                    <div className={style.ModalTop}>
                        <h1 className={style.title}>{header}</h1>
                        <button 
                            className={style.close}
                            onClick={closeButton}
                        >
                            <img src={closeImg} alt={"closeImg"}/> 
                        </button>
                    </div>
                    <div className={style.ModalContent}>
                        <p className={style.text}>{text}</p>
                        {actions}
                    </div>
                </div>
            </div>
            <Backdrop onClick={onClick}/>
            </>
        )
    }
}

Modal.propTypes = {
    header: PropTypes.string,
    text: PropTypes.string,
    closeButton: PropTypes.func,
    actions: PropTypes.object,
    onClick: PropTypes.func
}


export default Modal

