import React from 'react'
import './IPInfo.css'

import IPInfoElement from './IPInfoElement/IPInfoElement'

function IPInfo({ipAddress}) {
    //const [ipAddress, setIpAddress] = ipAddressState;

    const labels = ["IP ADRESS", "LOCATION", "TIMEZONE", "ISP"];
    const data = ipAddress.ip !== '' ?
    [
        ipAddress.ip,
        `${ipAddress.location.city}, ${ipAddress.location.country} ${ipAddress.location.postalCode}`,
        `UTC ${ipAddress.location.timezone}`,
        ipAddress.isp
    ]
    :
    ['','','','']// so the fields don't render with : , and utc befor the data is fetched

    return (
        <div className='IP_info_container'>
            {
                labels.map((label, index)=><IPInfoElement key={index} label={label} data={data[index]}/>)
            }
        </div>
    )
}

export default IPInfo
