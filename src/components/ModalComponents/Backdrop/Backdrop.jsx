import React from 'react'
import styles from './Backdrop.module.scss'
import PropTypes from 'prop-types'

const Backdrop = ({onClick}) => {
    return (
        <div 
            className={styles.Backdrop}
            onClick={onClick}
        />
    )
}

Backdrop.propTypes = {
    onClick: PropTypes.func
}

export default Backdrop