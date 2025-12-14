import { useState } from "react";
import type { NewsCategory } from "../types";

interface NewsFormProps {
  onSubmit: (data: { title: string; description: string; category: NewsCategory }) => void;
}

const NewsForm: React.FC<NewsFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<NewsCategory>("other");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;
    onSubmit({ title, description, category });
    setTitle("");
    setDescription("");
    setCategory("other");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as NewsCategory)}
          style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
        >
          <option value="volunteer">🤝 Volunteering</option>
          <option value="shelter">🏠 Animal Shelters</option>
          <option value="donation">💉 Blood Donation</option>
          <option value="ecology">🌱 Ecology</option>
          <option value="other">📌 Other</option>
        </select>
      </div>
      <button
        type="submit"
        style={{ background: "#3498db", color: "white", padding: "8px 16px", borderRadius: "6px", border: "none", cursor: "pointer" }}
      >
        Add News
      </button>
    </form>
  );
};

export default NewsForm;