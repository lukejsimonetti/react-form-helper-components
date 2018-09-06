import React from 'react';
import { Badge } from 'reactstrap'

const ActiveBadge = props => {
        return (
            <span>
                <Badge color={props.active ? 'success' : 'secondary'}>
                    {props.active ? 'Yes' : 'No'} 
                </Badge>
            </span>
        );
}

export default ActiveBadge;