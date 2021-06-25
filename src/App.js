import React, { useState, useEffect } from 'react';
import './App.css'

import HeadSection from './components/HeadSection/HeadSection'
import Map from './components/Map/Map'
import { getIPAdressInfo } from './api/api'

function App() {
  const [ipAddressInfo, setipAddressInfo] = useState({
    "ip": "",
    "location": {
      "city": "",
      "lat": 0,
      "lng": 0,
      "country": "",
      "postalCode": "",
      "timezone": "",
    },
    "isp": "",
  })

  useEffect(() => {
    getIPAdressInfo('').then(info => {
      console.log(info);
      setipAddressInfo(info);
    })
    .catch(e=>alert(e))
  }, [])

  return (
    <div className="App">
      <HeadSection ipAddressState={[ipAddressInfo, setipAddressInfo]} />
      <Map pos={[ipAddressInfo.location.lat, ipAddressInfo.location.lng]} />
    </div>
  );
}

export default App;
