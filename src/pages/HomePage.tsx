import { useState } from "react";
import MapComponent from "../components/MapComponent";
import CategoryFilter from "../components/CategoryFilter";
import Modal from "../components/Modal";
import type { PointCategory, Point } from "../types";

import "./HomePage.css";
import SwiperHero from "../components/Swipper";

const HomePage = () => {
  const [selectedCategories, setSelectedCategories] = useState<PointCategory[]>(
    []
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sliderValue, setSliderValue] = useState<number>(50);
  const [points, setPoints] = useState<Point[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newPointCoords, setNewPointCoords] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  // Обновляем handleAddPoint с urgency
  const handleAddPoint = (data: {
    title: string;
    description: string;
    category: PointCategory;
    lat: number;
    lng: number;
    urgency: "urgent" | "medium" | "low";
  }) => {
    const newPoint: Point = {
      id: points.length + 1,
      name: data.title,
      description: data.description,
      category: data.category,
      position: [data.lat, data.lng],
      urgency: data.urgency,
    };
    setPoints([...points, newPoint]);
    setModalOpen(false);
    setNewPointCoords(null);
  };

  return (
    <div className="home-page">
      <div className="control-panel">
        <CategoryFilter
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sliderValue={sliderValue}
          setSliderValue={setSliderValue}
        />
        <div className="action-buttons">
          <button
            onClick={() => {
              setModalOpen(true);
              setNewPointCoords(null);
            }}
            className="add-point-btn"
          >
            ➕ Add Point
          </button>
        </div>
      </div>

      <SwiperHero />

      <div className="map-container">
        <MapComponent
          selectedCategories={selectedCategories}
          searchQuery={searchQuery}
          points={points}
          onMapClick={(lat, lng) => {
            setNewPointCoords({ lat, lng });
            setModalOpen(true);
          }}
          onDeletePoint={(id) => setPoints(points.filter((p) => p.id !== id))}
        />
      </div>

      {modalOpen && (
        <Modal
          defaultLat={newPointCoords?.lat}
          defaultLng={newPointCoords?.lng}
          onClose={() => setModalOpen(false)}
          onSave={handleAddPoint}
        />
      )}
    </div>
  );
};

export default HomePage;