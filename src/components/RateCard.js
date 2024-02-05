// RateCard.js
import React from 'react';
import { Card, Image } from 'semantic-ui-react';

function RateCard({ rate }) {
  const { carrier_name, origin_port_code, destination_port_code, sailing_date, transit_time, detention_days, demurrage_days } = rate;

  return (
    <Card fluid>
      <Card.Content>
        <div className="flex items-center justify-between">
          <p className="text-sm text-black font-medium">{carrier_name}</p>
          <div className="black-text-3 flex text-sm font-normal items-center gap-x-2">
            <p>{origin_port_code}</p>
            <span>
              <Image src="/static/media/link.2edb30da164ebd8ee8ff698c8012faf1.svg" alt="Link Icon" />
            </span>
            <p>{destination_port_code}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p>Sailing Date: {sailing_date}</p>
          <p>Transit Time: {transit_time}</p>
          <p>Free Days: {detention_days + demurrage_days}</p>
        </div>
      </Card.Content>
    </Card>
  );
}

export default RateCard;
