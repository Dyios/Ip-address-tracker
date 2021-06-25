import React, { useState, useEffect } from 'react'
import './IPSearchBar.css'

import { getIPAdressInfo } from '../../api/api'

function IPSearchBar({ ipAddressState }) {
    const [ipAddress, setIpAddress] = ipAddressState;
    const [inputIpAddress, setinputIpAddress] = useState('')

    useEffect(() => {
        if (!/[a-zA-Z]/g.test(inputIpAddress))
            setinputIpAddress(ipAddress.ip)
    }, [ipAddress])

    function handleIPAdressInput(event) {
        setinputIpAddress(event.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        getIPAdressInfo(inputIpAddress)
            .then(info => {console.log(info);setIpAddress(info)})
            .catch(e => alert(e))
    }

    return (
        <form className='IP-search-bar-container' onSubmit={handleSubmit}>
            <input className='IP-input' type='text'
                placeholder='Search for any IP or domain'
                value={inputIpAddress}
                onInput={handleIPAdressInput}
            />
            <input className='IP-search' type='button' onClick={handleSubmit} />
        </form>
    )
}

export default IPSearchBar
