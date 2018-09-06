import React from 'react'
import { Badge } from 'reactstrap'

const YesNoBadge = props => {
    switch (props.value) {
        case true: return <Badge color="success">Yes</Badge>

        case false: return <Badge color="danger">No</Badge>

        default: return <Badge color="secondary">N/A</Badge>
    }
}

export default YesNoBadge