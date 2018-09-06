import React from 'react'
import { FormGroup, FormFeedback, Input, Label } from 'reactstrap'
import { TextMask, InputAdapter } from 'react-text-mask-hoc'


const InputText = ({ input, label, mask, meta: { touched, error, warning }, ...props }) => {
  if (mask !== undefined) return (
    <FormGroup className={touched && error ? 'has-error' : ''}>
      <Label hidden htmlFor={input.name}>{label}</Label>
      <TextMask
        {...input}
        placeholder={label}
        mask={mask}
        Component={InputAdapter}
        className={`form-control${touched && (Boolean(error) || Boolean(warning)) ? ' is-invalid' : ''}`}
      />
      {touched && error ? <FormFeedback>{error}</FormFeedback> : null}
      {touched && warning ? <FormFeedback>{warning}</FormFeedback> : null}
    </FormGroup>
  )
  return (
    <FormGroup className={touched && error ? 'has-error' : ''}>
      <Label hidden={props.labelHidden} htmlFor={input.name}><strong>{label}</strong></Label>
      <Input {...input} placeholder={label} className={touched && (Boolean(error) || Boolean(warning)) ? 'is-invalid' : ''} />
      {touched && error ? <FormFeedback>{error}</FormFeedback> : null}
      {touched && warning ? <FormFeedback>{warning}</FormFeedback> : null}
    </FormGroup>
  )
}

InputText.defaultProps = {
  labelHidden: true
}

export default InputText