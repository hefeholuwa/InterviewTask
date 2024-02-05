import React from 'react'

const RateCard = ({ rate }) => {
  return (
    <div className="rate-card">
      <h2>{rate.carrier_name}</h2>
      <p>Origin: {rate.origin_port_code}</p>
      <p>Destination: {rate.destination_port_code}</p>
      <p>Sailing Date: {rate.sailing_date}</p>
      <p>Transit Time: {rate.transit_time}</p>
      <p>Free Days: {rate.detention_days + rate.demurrage_days}</p>
    </div>
  )
}

export default RateCard
