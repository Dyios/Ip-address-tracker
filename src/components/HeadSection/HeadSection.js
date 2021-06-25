import React from 'react'
import './HeadSection.css'

import IPSearchBar from '../IPSearchBar/IPSearchBar'
import IPInfo from '../IPInfo/IPInfo'

function HeadSection({ipAddressState}) {
    return (
        <header>
            <h2 className='app-name'>IP Address Tracker</h2>
            <IPSearchBar ipAddressState={ipAddressState} />
            <IPInfo ipAddress={ipAddressState[0]} />
        </header>
    )
}

export default HeadSection
