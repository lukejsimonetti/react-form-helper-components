import React from 'react'
import { Button, ButtonGroup, Label, FormGroup } from 'reactstrap'

const YesNoAny = ({ input, label, ...props }) => {
    return (
        <FormGroup>
            <Label htmlFor={input.name}><strong>{label}</strong></Label>
            <div>
                <ButtonGroup>
                    <Button color={input.value === 1 ? 'success' : 'secondary'} onClick={() => {input.onChange(1), props.onValueChange(1)}}>Yes</Button>
                    <Button color={input.value === 0 ? 'danger': 'secondary'} onClick={() => {input.onChange(0), props.onValueChange(0)}}>No</Button>
                    <Button color={input.value === "" ? 'warning' : 'secondary'} onClick={() => {input.onChange(""), props.onValueChange(null)}}>Any</Button>
                </ButtonGroup>
            </div>
        </FormGroup>
    )
}

export default YesNoAny