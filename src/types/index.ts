export type PointCategory =
  | "volunteer"
  | "shelter"
  | "donation"
  | "ecology"
  | "other";

export interface Point {
  id: number;
  name: string; // вместо title
  description: string;
  category: PointCategory;
  position: [number, number]; // вместо lat/lng
  address?: string;
  contact?: string;
}

export interface CategoryFilterProps {
  selectedCategories: PointCategory[];
  setSelectedCategories: (categories: PointCategory[]) => void;
}

export interface MapComponentProps {
  selectedCategories: PointCategory[];
  searchQuery: string;

  // Новые пропсы для точек и клика по карте
  points: Point[];
  onMapClick?: (lat: number, lng: number) => void;
}

export type NewsCategory = "volunteer" | "shelter" | "donation" | "ecology" | "other";

export interface NewsItem {
  id: number;
  title: string;
  description: string;
  category: NewsCategory;
}
