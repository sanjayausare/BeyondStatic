import React from 'react'
import Navbar from './Navbar'


export default function Sidbar(props) {
    return (
        <Navbar suffix={props.suffix} prefix={props.prefix} />
    )
}
