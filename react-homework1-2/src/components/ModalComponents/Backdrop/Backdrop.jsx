import React from 'react'
import classes from './Backdrop.module.scss'
import PropTypes from 'prop-types'

class Backdrop extends React.Component {
    render() {
        const {onClick} = this.props
        return (
            <div 
                className={classes.Backdrop}
                onClick={onClick}
            />
        )
    }
}

Backdrop.propTypes = {
    onClick: PropTypes.func
}

export default Backdrop