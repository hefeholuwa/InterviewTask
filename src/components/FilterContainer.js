import React from 'react'

const FilterContainer = ({ containerSizes, containerTypes, carrierNames, onFilterChange }) => {
  return (
    <div className="filters">
      <label htmlFor="containerSize">Container Size:</label>
      <select id="containerSize" onChange={(e) => onFilterChange('containerSize', e.target.value)}>
        {containerSizes.map((size, index) => (
          <option key={index} value={size}>
            {size}
          </option>
        ))}
      </select>

      <label htmlFor="containerType">Container Type:</label>
      <select id="containerType" onChange={(e) => onFilterChange('containerType', e.target.value)}>
        {containerTypes.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>

      <label htmlFor="carrierName">Carrier Name:</label>
      <select id="carrierName" onChange={(e) => onFilterChange('carrierName', e.target.value)}>
        {carrierNames.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FilterContainer
