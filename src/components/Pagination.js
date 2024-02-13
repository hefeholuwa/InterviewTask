/*eslint-disable*/

import React from 'react'
import PropTypes from 'prop-types'

const Pagination = ({ onLoadMore }) => {
  return (
    <div className="pagination">
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
        onClick={onLoadMore}
      >
        Load More
      </button>
    </div>
  )
}

Pagination.propTypes = {
  onLoadMore: PropTypes.func.isRequired
}

export default Pagination
