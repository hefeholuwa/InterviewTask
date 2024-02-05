// RateList.js
import React from 'react';
import { Card } from 'semantic-ui-react';
import RateCard from './RateCard';

function RateList({ rates, carrierFilter }) {
  const filteredRates = carrierFilter ? rates.filter((rate) => rate.carrier_name === carrierFilter) : rates;

  return (
    <Card.Group itemsPerRow={3}>
      {filteredRates.map((rate) => (
        <RateCard key={rate.special_rate_id} rate={rate} />
      ))}
    </Card.Group>
  );
}

export default RateList;
