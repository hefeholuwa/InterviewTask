/* eslint-disable */

// RateCard.js
import React from 'react';

const RateCard = ({ rate }) => {
  console.log('Rate in RateCard component:', rate);

  if (!rate) {
    return <p>No rate data available</p>;
  }

  const {
    carrier_name,
    origin_port_code,
    destination_port_code,
    sailing_date,
    transit_time,
    detention_days,
    demurrage_days,
  } = rate;

  return (
    <div className="rate-card">
      <h2>{carrier_name}</h2>
      <p>Origin: {origin_port_code}</p>
      <p>Destination: {destination_port_code}</p>
      <p>Sailing Date: {sailing_date}</p>
      <p>Transit Time: {transit_time}</p>
      <p>Free Days: {detention_days + demurrage_days}</p>
    </div>
  );
};

export default RateCard;
