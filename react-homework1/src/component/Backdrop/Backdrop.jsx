import React from 'react'
import classes from './Backdrop.module.scss'

class Backdrop extends React.Component {
    render() {
        return (
            <div 
                className={classes.Backdrop}
                // onClick={this.props.onClick}
            />
        )
    }
}

export default Backdrop