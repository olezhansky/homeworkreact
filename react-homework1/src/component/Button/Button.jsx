import React, {Component} from 'react'
import style from './Button.module.scss'

class Button extends Component {


    render() {
        const {text} = this.props
        return (
            <button
                
                style={{backgroundColor: this.props.backgroundColor}} 
                className={style.Button}
                onClick={this.props.onClick}>{text}
            </button>
        )
    }
}

export default Button