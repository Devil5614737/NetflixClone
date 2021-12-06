import React from 'react'
import {Input as Inputs} from './style'

function Input({placeholder,type,...props}) {
    return (
       <Inputs placeholder={placeholder} type={type} {...props} />
    )
}

export default Input
