import type { CategoryFilterProps, PointCategory } from "../types";
import "./CategoryFilter.css";

type CategoryData = {
  label: string;
  description: string;
  image: string;
  extraInfo: string;
};

const CATEGORY_DETAILS: Record<PointCategory, CategoryData> = {
  volunteer: {
    label: "🤝 Volunteering",
    description:
      "Places where volunteers are needed to help people and communities.",
    image: "/images/volunteer.jpg",
    extraInfo:
      "Join community projects like education, disaster relief, and social support. Training is often provided for new volunteers. You can contribute a few hours per week and make a real impact.",
  },
  shelter: {
    label: "🏠 Animal Shelters",
    description:
      "Animal shelters where you can help, adopt pets, or donate supplies.",
    image: "/images/shelter.jpg",
    extraInfo:
      "Help feed, walk, or care for animals. Donations of food, toys, and blankets are always welcome. Shelters often need volunteers for events and animal care activities.",
  },
  donation: {
    label: "💉 Blood Donation",
    description:
      "Blood donation centers where you can save lives by donating blood.",
    image: "/images/donation.jpg",
    extraInfo:
      "Donating blood is quick and safe. Bring an ID, stay hydrated, and help hospitals save lives. Some centers also accept plasma and platelet donations.",
  },
  ecology: {
    label: "🌱 Ecology",
    description:
      "Environmental projects focused on nature protection and sustainability.",
    image: "/images/ecology.jpg",
    extraInfo:
      "Participate in tree planting, recycling campaigns, and awareness programs to protect nature. You can also join clean-up drives or educational workshops.",
  },
  other: {
    label: "📌 Other",
    description:
      "Other useful places and initiatives that don’t fit into main categories.",
    image: "/images/other.jpg",
    extraInfo:
      "Includes educational initiatives, tech support for NGOs, and other community projects that help people in unique ways. Explore local initiatives to make a difference.",
  },
};

interface ExtendedCategoryFilterProps extends CategoryFilterProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  sliderValue: number;
  setSliderValue: React.Dispatch<React.SetStateAction<number>>;
}

const CategoryFilter: React.FC<ExtendedCategoryFilterProps> = ({
  selectedCategories,
  setSelectedCategories,
  searchQuery,
  setSearchQuery,
  sliderValue,
  setSliderValue,
}) => {
  const toggleCategory = (category: PointCategory) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSearchQuery("");
    setSliderValue(50);
  };

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    searchQuery.length > 0 ||
    sliderValue !== 50;

  return (
    <div className="category-filter">
      {/* Search */}
      <div className="cotagories">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by name or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {hasActiveFilters && (
            <button onClick={clearFilters} className="clear-filters-btn">
              ✕ Clear filters
            </button>
          )}
        </div>

        {/* Categories */}
        <h4>Categories</h4>
        <div className="category-buttons">
          {Object.keys(CATEGORY_DETAILS).map((key) => {
            const category = key as PointCategory;
            const isActive = selectedCategories.includes(category);
            return (
              <button
                key={category}
                className={`category-btn ${isActive ? "active" : ""}`}
                onClick={() => toggleCategory(category)}
              >
                {CATEGORY_DETAILS[category].label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Карточки всех выбранных категорий */}
      <div className="category-info-container">
        {selectedCategories.map((cat) => (
          <div key={cat} className="category-info-card">
            <div className="info-header">
              <h3>{CATEGORY_DETAILS[cat].label}</h3>
            </div>
            <img
              src={CATEGORY_DETAILS[cat].image}
              alt={CATEGORY_DETAILS[cat].label}
              className="category-image"
            />
            <p className="category-description">
              {CATEGORY_DETAILS[cat].description}
            </p>
            <p className="category-extra">{CATEGORY_DETAILS[cat].extraInfo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;