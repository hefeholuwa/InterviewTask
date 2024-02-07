// src/Pagination.js

import React from 'react'
import PropTypes from 'prop-types'

const Pagination = ({ onLoadMore }) => {
  return (
    <div className="pagination">
      <button onClick={onLoadMore}>Load More</button>
    </div>
  )
}

Pagination.propTypes = {
  onLoadMore: PropTypes.func.isRequired
}

export default Pagination
