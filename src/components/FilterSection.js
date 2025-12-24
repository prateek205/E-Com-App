import React from 'react';
import { useProductContext } from '../Context/ProductContext';

const FilterSection = () => {
  const {
    categories,
    filters,
    updateFilters,
    resetFilters,
    sortBy,
    setSortBy,
  } = useProductContext();

  return (
    <div className="filter-section">
      <div className="filter-header">
        <h3>Filters</h3>
        <button onClick={resetFilters} className="clear-filters">
          Clear All
        </button>
      </div>

      {/* Category Filter */}
      <div className="filter-group">
        <h4>Category</h4>
        <div className="category-list">
          {categories.map(category => (
            <label key={category} className="category-item">
              <input
                type="radio"
                name="category"
                value={category}
                checked={filters.category === category}
                onChange={(e) => updateFilters({ category: e.target.value })}
              />
              <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="filter-group">
        <h4>Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}</h4>
        <div className="price-slider">
          <input
            type="range"
            min="0"
            max="1000"
            value={filters.priceRange[0]}
            onChange={(e) =>
              updateFilters({
                priceRange: [parseInt(e.target.value), filters.priceRange[1]],
              })
            }
          />
          <input
            type="range"
            min="0"
            max="1000"
            value={filters.priceRange[1]}
            onChange={(e) =>
              updateFilters({
                priceRange: [filters.priceRange[0], parseInt(e.target.value)],
              })
            }
          />
        </div>
      </div>

      {/* Rating Filter */}
      <div className="filter-group">
        <h4>Minimum Rating</h4>
        <div className="rating-filter">
          {[4, 3, 2, 1].map(rating => (
            <label key={rating} className="rating-item">
              <input
                type="radio"
                name="rating"
                value={rating}
                checked={filters.rating === rating}
                onChange={(e) =>
                  updateFilters({ rating: parseInt(e.target.value) })
                }
              />
              <span>{rating}+ Stars</span>
            </label>
          ))}
          <label className="rating-item">
            <input
              type="radio"
              name="rating"
              value="0"
              checked={filters.rating === 0}
              onChange={() => updateFilters({ rating: 0 })}
            />
            <span>All Ratings</span>
          </label>
        </div>
      </div>

      {/* Stock Filter */}
      <div className="filter-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={(e) => updateFilters({ inStock: e.target.checked })}
          />
          <span>Show Only In Stock</span>
        </label>
      </div>

      {/* Sorting */}
      <div className="filter-group">
        <h4>Sort By</h4>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="sort-select"
        >
          <option value="featured">Featured</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="name-asc">Name: A to Z</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSection;