import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import type { MapComponentProps, PointCategory } from "../types";
import "leaflet/dist/leaflet.css";
import "../utils/leafletFix";
import { usePointsStore } from "../store/usePointsStore";

const MapComponent: React.FC<MapComponentProps> = ({
  selectedCategories,
  searchQuery,
}) => {
  const { points, addPoint, deletePoint } = usePointsStore(); // используем removePoint

  const AddPointOnClick = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        addPoint({
          name: "New Point",
          description: "Custom added point",
          category: "other",
          position: [lat, lng],
          contact: "",
          address: "",
        });
      },
    });
    return null;
  };

  const filteredPoints = points.filter((point) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(point.category);
    const matchesSearch =
      point.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      point.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryLabel = (category: PointCategory): string => {
    const labels = {
      volunteer: "🤝 Volunteering",
      shelter: "🏠 Animal Shelters",
      donation: "💉 Blood Donation",
      ecology: "🌱 Ecology",
      other: "📌 Other",
    };
    return labels[category];
  };

  const getCategoryColor = (category: PointCategory): string => {
    const colors = {
      volunteer: "#3498db",
      shelter: "#e74c3c",
      donation: "#9b59b6",
      ecology: "#27ae60",
      other: "#f39c12",
    };
    return colors[category];
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        center={[55.7558, 37.6173]}
        zoom={12}
        style={{ height: "100%", width: "100%" }}
      >
        {" "}
        <AddPointOnClick />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {filteredPoints.map((point) => (
          <Marker key={point.id} position={point.position}>
            <Popup>
              <div>
                <h3>{point.name}</h3>
                <p>{point.description}</p>

                {point.address && <div>📍 {point.address}</div>}
                {point.contact && <div>📞 {point.contact}</div>}

                <button
                  style={{
                    backgroundColor: getCategoryColor(point.category),
                    padding: "4px 10px",
                    color: "white",
                    borderRadius: "6px",
                    marginTop: "6px",
                    display: "inline-block",
                    cursor: "pointer",
                  }}
                >
                  {getCategoryLabel(point.category)}
                </button>

                {/* Кнопка удалить */}
                <div style={{ marginTop: "8px" }}>
                  <button
                    style={{
                      backgroundColor: "#e74c3c",
                      color: "white",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                    onClick={() => deletePoint(point.id)}
                  >
                    Удалить
                  </button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
