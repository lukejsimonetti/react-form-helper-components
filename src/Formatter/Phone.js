// @flow
import React from "react"

const Phone = (props) => {
    const getFormattedPhone = (v) => {
        if (v == null) {
            return false
        }
        if (v.length === 10) {
            var areaCode = v.substr(0, 3)
            var middle = v.substr(3, 3)
            var end = v.substr(6, 4)
            return "(" + areaCode + ") " + middle + "-" + end
        }
        return v
    }
    return getFormattedPhone(props.value)
}
export default Phone
