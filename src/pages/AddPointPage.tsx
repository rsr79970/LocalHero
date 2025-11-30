import PointForm from '../components/PointForm';
import { usePointsStore } from '../store/usePointsStore';
import type { Point } from '../types';

export const AddPointPage = () => {
  const { points, addPoint, deletePoint } = usePointsStore();

  const handleAddPoint = (newPoint: Omit<Point, 'id'>) => {
    addPoint(newPoint);
    alert('Point successfully added!');
  };

  return (
    <div className="add-point-page">
      <div className="container">
        <h1>Add New Point</h1>

        <PointForm onSubmit={handleAddPoint} />

        <div className="preview">
          <h3>Added Points ({points.length})</h3>

          {points.map(point => (
            <div key={point.id} className="point-preview">
              <strong>{point.name}</strong> — {point.description}
              
              <button
                onClick={() => deletePoint(point.id)}
                style={{
                  marginLeft: '10px',
                  background: '#e74c3c',
                  color: 'white',
                  padding: '3px 8px',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
