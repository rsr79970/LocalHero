import { useState } from "react";
import { Link } from "react-router-dom";
import MapComponent from "../components/MapComponent";
import CategoryFilter from "../components/CategoryFilter";
import type { PointCategory } from "../types";

const HomePage = () => {
  const [selectedCategories, setSelectedCategories] = useState<PointCategory[]>(
    []
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sliderValue, setSliderValue] = useState<number>(50); // новое состояние для слайдера

  const clearFilters = () => {
    setSelectedCategories([]);
    setSearchQuery("");
    setSliderValue(50); // сброс слайдера
  };

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    searchQuery.length > 0 ||
    sliderValue !== 50;

  return (
    <div className="home-page">
      {/* Control Panel */}{" "}
      <div className="control-panel">
        {" "}
        <div className="search-section">
          {" "}
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />{" "}
          </div>
          {hasActiveFilters && (
            <button onClick={clearFilters} className="clear-filters-btn">
              ✕ Clear filters
            </button>
          )}
        </div>
        <CategoryFilter
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        {/* Новый слайдер */}
        <div className="slider-section" style={{ marginTop: "10px" }}>
          <label>
            Filter by value: {sliderValue}
            <input
              type="range"
              min={0}
              max={100}
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              style={{ width: "100%" }}
            />
          </label>
        </div>
        <div className="action-buttons">
          <Link to="/add-point" className="add-point-btn">
            ➕ Add Point
          </Link>
        </div>
      </div>
      {/* Filter Info */}
      {hasActiveFilters && (
        <div className="filter-info">
          <p>
            Active filters:
            {selectedCategories.length > 0 &&
              ` Categories: ${selectedCategories.length}`}
            {searchQuery && ` Search: "${searchQuery}"`}
            {sliderValue !== 50 && ` Slider: ${sliderValue}`}
          </p>
        </div>
      )}
      {/* Map Container */}
      <div className="map-container">
        <MapComponent
          selectedCategories={selectedCategories}
          searchQuery={searchQuery}
        />
      </div>
    </div>
  );
};

export default HomePage;
