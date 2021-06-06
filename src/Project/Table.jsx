import React from 'react'
import DetailsTable from './TableMain'

export default function Table(props) {
    return (
        <div className="container-fluid text-center">
            <DetailsTable
                id={props.id}
                field1={props.field1}
                field2={props.field2}
                field3={props.field3}
                field4={props.field4}
                field5={props.field5} />
        </div>
    )
}
