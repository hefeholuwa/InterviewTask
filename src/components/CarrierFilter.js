// CarrierFilter.js
import React from 'react';

function CarrierFilter({ carriers, setCarrierFilter }) {
  return (
    <div>
      <select onChange={(e) => setCarrierFilter(e.target.value)}>
        <option value="">All Carriers</option>
        {carriers.map((carrier) => (
          <option key={carrier} value={carrier}>
            {carrier}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CarrierFilter;
