import React from 'react'
import './IPInfoElement.css'

function IPInfoElement({label, data}) {
    //console.log(data)
    return (
        <div className='IP-info-element'>
            <div className='IP-info-lable' >{label}</div>
            <div className='IP-info-data' >{data}</div>
        </div>
    )
}

export default IPInfoElement
