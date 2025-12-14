import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet";
import type { MapComponentProps, Point, PointCategory } from "../types";
import "leaflet/dist/leaflet.css";

interface AddPointOnClickProps {
  onClick: (lat: number, lng: number) => void;
}

const AddPointOnClick: React.FC<AddPointOnClickProps> = ({ onClick }) => {
  useMapEvents({
    click(e) {
      onClick(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
};

// Цвета категорий
const categoryColors: Record<PointCategory, string> = {
  volunteer: "#3498db",
  shelter: "#e74c3c",
  donation: "#9b59b6",
  ecology: "#27ae60",
  other: "#f39c12",
};

// Создание кастомной SVG иконки
const createCustomIcon = (color: string) => {
  return new L.DivIcon({
    html: `
      <div style="
        background-color: ${color};
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid white;
        box-shadow: 0 0 5px rgba(0,0,0,0.5);
      "></div>
    `,
    className: "", // убираем стандартный стиль
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12],
  });
};

interface Props extends MapComponentProps {
  points: Point[];
  onMapClick?: (lat: number, lng: number) => void;
  onDeletePoint?: (id: number) => void;
}

const MapComponent: React.FC<Props> = ({ selectedCategories, searchQuery, points, onMapClick, onDeletePoint }) => {
  const filteredPoints = points.filter(point => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(point.category);
    const matchesSearch = point.name.toLowerCase().includes(searchQuery.toLowerCase()) || point.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <MapContainer center={[41.3775, 64.5853]} zoom={6} style={{ height: "100vh", width: "100%" }}>
      {onMapClick && <AddPointOnClick onClick={onMapClick} />}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />

      {filteredPoints.map(point => (
        <Marker
          key={point.id}
          position={point.position}
          icon={createCustomIcon(categoryColors[point.category])}
        >
          <Popup>
            <h3 style={{ color: categoryColors[point.category] }}>{point.name}</h3>
            <p>{point.description}</p>
            {onDeletePoint && (
              <div style={{ marginTop: "8px" }}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeletePoint(point.id);
                  }}
                  style={{
                    backgroundColor: "#e74c3c",
                    color: "white",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Удалить
                </button>
              </div>
            )}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;