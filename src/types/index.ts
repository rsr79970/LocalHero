export interface Point {
  id: number;
  name: string;
  description: string;
  category: PointCategory;
  position: [number, number];
  address?: string;
  contact?: string;
}

export type PointCategory = 
  | 'volunteer' 
  | 'shelter' 
  | 'donation' 
  | 'ecology' 
  | 'other';

export interface CategoryFilterProps {
  selectedCategories: PointCategory[];
  setSelectedCategories: (categories: PointCategory[]) => void;
}

export interface MapComponentProps {
  selectedCategories: PointCategory[];
  searchQuery: string;
}