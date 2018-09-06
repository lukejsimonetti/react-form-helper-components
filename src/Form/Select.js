import React from 'react'
import ReactSelect from 'react-select'
import { FormFeedback, Label } from 'reactstrap'
import 'react-select/dist/react-select.css'

const Select = ({ 
    handleChange, input, select, label, value, parentDivClass, disabled, options, clearable, multi, placeholder, meta: { touched, error, warning }, ...props }) => {

    const onChange = (e) => {
        handleChange(e)
    }

    const renderLabel = () => {
        if(label == undefined){
            return (null)
        }
        return (<Label htmlFor={name}><strong>{label}</strong> </Label>)
    }

    return (
        <div className={`${parentDivClass}${touched && error ? ' has-error' : ''}`}>
            {renderLabel()}
            <ReactSelect
                placeholder={placeholder}
                clearable={clearable}
                name={label}
                value={input.value || ''}
                options={options}
                onChange={input.onChange}
                multi={multi}
                disabled={disabled}
                {...props}
            />
             {touched && error ? <span className="text-danger">{error}</span> : null}
            {touched && warning ? <span className="text-danger">{warning}</span> : null}
        </div>
    )
}

Select.defaultProps = {
    parentDivClass: 'form-group'
}

export default Select