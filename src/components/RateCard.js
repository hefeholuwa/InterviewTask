/*eslint-disable*/

import React from 'react'

const RateCard = ({ rate }) => {
  // Log rate data to the console
  console.log('Rate in RateCard component:', rate)

  // Check if rate data is not available
  if (!rate) {
    return <p>No rate data available</p>
  }

  // Destructure rate object to extract individual properties
  const {
    carrier_name,
    origin_port_code,
    destination_port_code,
    sailing_date,
    transit_time,
    detention_days,
    demurrage_days
  } = rate

  // JSX rendering of RateCard component
  return (
    <div className="rate-card">
      {/* Display carrier name */}
      <h2>{carrier_name}</h2>
      {/* Display origin port code */}
      <p>Origin: {origin_port_code}</p>
      {/* Display destination port code */}
      <p>Destination: {destination_port_code}</p>
      {/* Display sailing date */}
      <p>Sailing Date: {sailing_date}</p>
      {/* Display transit time */}
      <p>Transit Time: {transit_time}</p>
      {/* Display total free days (detention days + demurrage days) */}
      <p>Free Days: {detention_days + demurrage_days}</p>
    </div>
  )
}

// Export the RateCard component
export default RateCard