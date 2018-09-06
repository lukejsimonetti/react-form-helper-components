import React from 'react'
import DateTime from 'react-datetime'
import { Label, FormFeedback } from 'reactstrap'

import 'react-datetime/css/react-datetime.css'

export const DatePicker = ({ input, label, meta: { error, touched }, ...props }) => {

    return (
        <div className={`form-group${error && touched ? ' has-error' : ''}`}>
            <Label htmlFor={input.name}><strong>{label}</strong></Label>
            <DateTime
                {...props}
                {...input}
                timeFormat={false}
                closeOnTab={true}
            />
            {error && touched && <FormFeedback>{error}</FormFeedback>}
        </div>
    )
}

export const TimePicker = ({ input, label, meta: { error, touched }, ...props }) => {

    return (
        <div className={`form-group${error && touched ? ' has-error' : ''}`}>
            <Label htmlFor={input.name}><strong>{label}</strong></Label>
            <DateTime
                {...props}
                {...input}
                dateFormat={false}
                closeOnTab={true}
            />
            {error && touched && <FormFeedback>{error}</FormFeedback>}
        </div>
    )
}

export const DateTimePicker = ({ input, label, meta: { error, touched }, ...props }) => {

    return (
        <div className={`form-group${error && touched ? ' has-error' : ''}`}>
            <Label htmlFor={input.name}><strong>{label}</strong></Label>
            <DateTime
                {...props}
                {...input}
                closeOnTab={true}
            />
            {error && touched && <FormFeedback>{error}</FormFeedback>}
        </div>
    )
}
