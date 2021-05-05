import React, {Component} from 'react'
import style from './Button.module.scss'
import PropTypes from 'prop-types'

class Button extends Component {
    render() {
        const {text, onClick, backgroundColor} = this.props
        return (
            <button
                style={{backgroundColor}} 
                className={style.Button}
                onClick={onClick}
            >
                {text}
            </button>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func
}

export default Button