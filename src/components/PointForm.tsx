// components/PointForm.tsx
import { useState } from 'react';
import type { PointCategory, Point } from '../types';

interface PointFormProps {
  onSubmit: (point: Omit<Point, 'id'>) => void;
}

interface FormData {
  name: string;
  description: string;
  category: PointCategory;
  address: string;
  contact: string;
  position: [number, number];
}

const PointForm: React.FC<PointFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    category: 'volunteer',
    address: '',
    contact: '',
    position: [55.7558, 37.6173] // Default Moscow
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.description.trim()) {
      alert('Please fill in all required fields');
      return;
    }
    onSubmit(formData);
    setFormData({
      name: '',
      description: '',
      category: 'volunteer',
      address: '',
      contact: '',
      position: [55.7558, 37.6173]
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="point-form">
      <div className="form-group">
        <label>Place Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter place name"
        />
      </div>

      <div className="form-group">
        <label>Description *</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Describe what kind of help is needed"
        />
      </div>

      <div className="form-group">
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="volunteer">Volunteering</option>
          <option value="shelter">Animal Shelter</option>
          <option value="donation">Blood Donation</option>
          <option value="ecology">Ecology</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter full address"
        />
      </div>

      <div className="form-group">
        <label>Contact Information</label>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Phone, email, or website"
        />
      </div>

      <button type="submit" className="submit-btn">
        Add Point
      </button>
    </form>
  );
};

export default PointForm;