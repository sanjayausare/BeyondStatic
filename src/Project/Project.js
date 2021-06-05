import React from 'react'
import Navbar from './Navbar'

export default function Project({match:{params:{id}}}) {
    return (
        <div style={{padding:'0',margin:'0'}}>
            <Navbar style={{padding:'0',margin:'0'}}/>
            <br /><br />
        </div>
    )
}
