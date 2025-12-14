import { useState } from "react";
import type { PointCategory } from "../types";
import "./Modal.css";

interface ModalProps {
  onClose: () => void;
  onSave: (data: {
    title: string;
    description: string;
    category: PointCategory;
    lat: number;
    lng: number;
  }) => void;
  defaultLat?: number;
  defaultLng?: number;
}

const categoryLabels: Record<PointCategory, string> = {
  volunteer: "🤝 Volunteering",
  shelter: "🏠 Shelter",
  donation: "💉 Blood Donation",
  ecology: "🌱 Ecology",
  other: "📌 Other",
};

const Modal: React.FC<ModalProps> = ({ onClose, onSave, defaultLat, defaultLng }) => {
  const [lat, setLat] = useState(defaultLat ?? 0);
  const [lng, setLng] = useState(defaultLng ?? 0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<PointCategory>("volunteer");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ title, description, category, lat, lng });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Add Point</h2>
        <form onSubmit={handleSubmit}>
          <input type="number" placeholder="Latitude" value={lat} onChange={(e) => setLat(Number(e.target.value))} required />
          <input type="number" placeholder="Longitude" value={lng} onChange={(e) => setLng(Number(e.target.value))} required />
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
          <select value={category} onChange={(e) => setCategory(e.target.value as PointCategory)}>
            {Object.keys(categoryLabels).map((key) => (
              <option key={key} value={key}>{categoryLabels[key as PointCategory]}</option>
            ))}
          </select>

          <div className="modal-buttons">
            <button type="submit" style={{ backgroundColor: "#4caf50" }}>Save</button>
            <button type="button" style={{ backgroundColor: "#e74c3c" }} onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;