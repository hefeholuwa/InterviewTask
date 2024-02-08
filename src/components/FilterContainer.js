/* eslint-disable */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const FilterContainer = ({ containerSizes, containerTypes, onFilterChange, rates, selectedCarrier, setCarrierNames }) => {
  // Use useEffect to set unique carrier names when rates or setCarrierNames change
  useEffect(() => {
    // Extract unique carrier names from rates and set them using setCarrierNames
    const uniqueCarrierNames = [...new Set(rates.map((rate) => rate.carrier_name))];
    setCarrierNames(['All Carriers', ...uniqueCarrierNames]);
  }, [rates, setCarrierNames]);

  // Handle carrier name click event
  const handleCarrierClick = (name) => {
    onFilterChange('carrierName', name);
  };

  // Handle container size change event
  const handleContainerSizeChange = (value) => {
    // Convert container size to uppercase and call onFilterChange
    const uppercaseSize = value.toUpperCase();
    onFilterChange('containerSize', uppercaseSize);
  };

  // Handle container type change event
  const handleContainerTypeChange = (value) => {
    // Convert container type to lowercase and call onFilterChange
    const lowercaseType = value.toLowerCase();
    onFilterChange('containerType', lowercaseType);
  };

  // JSX rendering
  return (
    <div className="filters">
      {/* Container Size Select */}
      <div className="filter-section">
        {/* Container Size label */}
        <label htmlFor="containerSize">Container Size:</label>
        {/* Container Size dropdown */}
        <select id="containerSize" onChange={(e) => handleContainerSizeChange(e.target.value)}>
          {containerSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      {/* Container Type Select */}
      <div className="filter-section">
        {/* Container Type label */}
        <label htmlFor="containerType">Container Type:</label>
        {/* Container Type dropdown */}
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
        {/* Carrier List header */}
        <h3>Carrier Names</h3>
        {/* Carrier List with clickable items */}
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

// Prop types for the FilterContainer component
FilterContainer.propTypes = {
  containerSizes: PropTypes.array.isRequired,
  containerTypes: PropTypes.array.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  rates: PropTypes.array,
  selectedCarrier: PropTypes.string.isRequired,
  setCarrierNames: PropTypes.func.isRequired,
};

export default FilterContainer;
