import { create } from 'zustand';
import type { Point } from '../types';

interface PointsState {
  points: Point[];
  addPoint: (point: Omit<Point, 'id'>) => void;
  deletePoint: (id: number) => void;
}

export const usePointsStore = create<PointsState>((set) => ({
  points: [
    {
      id: 1,
      name: "Animal Shelter 'Helping Paws'",
      description: "Volunteers needed for dog walking and animal care.",
      category: 'volunteer',
      position: [55.7558, 37.6173],
      contact: "+7 (999) 123-45-67",
      address: "Pushkin St, 10"
    }
  ],

  addPoint: (newPoint) =>
    set((state) => ({
      points: [
        ...state.points,
        { ...newPoint, id: Date.now() }
      ]
    })),

  deletePoint: (id) =>
    set((state) => ({
      points: state.points.filter((p) => p.id !== id)
    }))
}));
