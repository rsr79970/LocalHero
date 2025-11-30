import type { CategoryFilterProps, PointCategory } from "../types";

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategories,
  setSelectedCategories,
}) => {
  const categories: { value: PointCategory; label: string }[] = [
    { value: "volunteer", label: "🤝 Volunteering" },
    { value: "shelter", label: "🏠 Animal Shelters" },
    { value: "donation", label: "💉 Blood Donation" },
    { value: "ecology", label: "🌱 Ecology" },
    { value: "other", label: "📌 Other" },
  ];

  const toggleCategory = (category: PointCategory) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="category-filter">
      <h4>Categories:</h4>
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category.value}
            className={`category-btn ${
              selectedCategories.includes(category.value) ? "active" : ""
            }`}
            onClick={() => toggleCategory(category.value)}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
