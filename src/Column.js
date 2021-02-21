import React from 'react'
import Cell from './Cell'

function Column( { day, length } ) {
    const cells = [...Array(length).keys()].map((index) => <Cell key={index}/>)

    return (
        <div className = "column">
            <p style={{fontWeight: 'bold', textAlign: 'center'}}>
                { day }
            </p>
            
            { cells }
        </div>
    )
}

export default Column
