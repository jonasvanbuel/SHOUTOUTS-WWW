import React from 'react';

// Import components

const FilterBar = () => {
  return (
    <div className="filter-bar">
      <div className="search-form">
        search
      </div>
      <div className="filter-options">
        <div className="filter-label">
          sort by:
        </div>
        <div className="filter-option" id="filter-option-posted">
          <i class="fas fa-caret-up"></i>
          posted
        </div>
        <div className="filter-option" id="filter-option-likes">
          <i class="fas fa-caret-up"></i>
          likes
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
