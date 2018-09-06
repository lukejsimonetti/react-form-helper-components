import React from 'react'
import PropTypes from 'prop-types'
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button
} from 'reactstrap'

const ModalWrapper = props => {

    const close = () => props.handleModal(undefined)

    const renderHeader = () => {
        if (props.header !== undefined) {
            return (
                <ModalHeader toggle={close}>
                    {props.header}
                </ModalHeader>
            )
        }
    }

    const renderActionButton = () => {
        if (props.actionButtonAction !== undefined) {
            return (
                <Button color={props.actionButtonColor} onClick={props.actionButtonAction}>
                    {props.actionButtonLabel}
                </Button>
            )
        }
    }

    return (
        <Modal
            size={props.size}
            isOpen={props.isOpen}
            className={props.className}
            toggle={close}
        >
            {renderHeader()}
            <ModalBody>{props.children}</ModalBody>
            <ModalFooter>
                {renderActionButton()}
                <Button color="secondary" onClick={close}>{props.hasCloseBtn ? `Close` : `Cancel`}</Button>
            </ModalFooter>
        </Modal>
    )
}

ModalWrapper.propTypes = {
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg'])
}

export default ModalWrapper