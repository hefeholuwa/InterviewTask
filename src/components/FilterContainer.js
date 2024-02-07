// src/components/FilterContainer.js
/* eslint-disable */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const FilterContainer = ({ containerSizes, containerTypes, onFilterChange, rates, selectedCarrier, setCarrierNames }) => {
  useEffect(() => {
    const uniqueCarrierNames = [...new Set(rates.map((rate) => rate.carrier_name))];
    setCarrierNames(['All Carriers', ...uniqueCarrierNames]);
  }, [rates, setCarrierNames]);

  const handleCarrierClick = (name) => {
    onFilterChange('carrierName', name);
  };

  const handleContainerSizeChange = (value) => {
    // Convert container size to uppercase
    const uppercaseSize = value.toUpperCase();
    onFilterChange('containerSize', uppercaseSize);
  };

  const handleContainerTypeChange = (value) => {
    // Convert container type to lowercase
    const lowercaseType = value.toLowerCase();
    onFilterChange('containerType', lowercaseType);
  };

  return (
    <div className="filters">
      {/* Container Size Select */}
      <div>
        <label htmlFor="containerSize">Container Size:</label>
        <select id="containerSize" onChange={(e) => handleContainerSizeChange(e.target.value)}>
          {containerSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      {/* Container Type Select */}
      <div>
        <label htmlFor="containerType">Container Type:</label>
        <select id="containerType" onChange={(e) => handleContainerTypeChange(e.target.value)}>
          {containerTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Carrier List */}
      <div className="carrier-list">
        <h3>Carrier Names</h3>
        <ul>
          {['All Carriers', ...new Set(rates.map((rate) => rate.carrier_name))].map((name, index) => (
            <li
              key={index}
              onClick={() => handleCarrierClick(name)}
              className={name === selectedCarrier ? 'selected' : ''}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

FilterContainer.propTypes = {
  containerSizes: PropTypes.array.isRequired,
  containerTypes: PropTypes.array.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  rates: PropTypes.array,
  selectedCarrier: PropTypes.string.isRequired,
  setCarrierNames: PropTypes.func.isRequired,
};

export default FilterContainer;
