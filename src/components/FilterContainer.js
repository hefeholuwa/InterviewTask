// FilterContainer.js
import React from 'react';

function FilterContainer({ containerSize, containerType, setContainerSize, setContainerType }) {
  return (
    <div>
      
      <select value={containerSize} onChange={(e) => setContainerSize(e.target.value)}>
        <option value="20FT">20FT</option>
        <option value="40FT">40FT</option>
      </select>

      <select value={containerType} onChange={(e) => setContainerType(e.target.value)}>
        <option value="dry">Dry</option>
        <option value="reefer">Reefer</option>
      </select>
    </div>
  );
}

export default FilterContainer;
