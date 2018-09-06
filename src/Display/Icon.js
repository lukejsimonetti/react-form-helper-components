import React from 'react'
import PropTypes from 'prop-types'

const Icon = props => {
    return (
        <i className={`
            fa
            fa-fw
            fa-${props.name}
            ${props.size ? `fa-${props.size}` : ''}
            ${props.className ? `${props.className}` : ''}
        `} 
            style={{...props.style}}
        />
    )
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    size: PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x'])
}

export default Icon