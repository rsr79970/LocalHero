// pages/NewsPage.tsx
import NewsForm from "../components/NewsForm";
import { useNewsStore } from "../store/useNewsStore";

const NewsPage = () => {
  const { news, addNews, deleteNews } = useNewsStore();

  return (
    <div
      className="news-page"
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "30px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#1e3a8a",
          fontSize: "2rem",
        }}
      >
        📋 News Board
      </h1>

      {/* Форма добавления новости */}
      <div
        style={{
          marginBottom: "30px",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          backgroundColor: "#f9fafb",
        }}
      >
        <NewsForm onSubmit={addNews} />
      </div>

      {/* Превью добавленных новостей */}
      <div className="news-list">
        {news.length === 0 ? (
          <p
            style={{
              textAlign: "center",
              color: "#6b7280",
              fontStyle: "italic",
            }}
          >
            No news yet. Be the first to post!
          </p>
        ) : (
          news.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#fff",
                padding: "15px 20px",
                borderRadius: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                marginBottom: "15px",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <div>
                <strong style={{ fontSize: "1.1rem", color: "#111827" }}>
                  {item.title}
                </strong>{" "}
                <span
                  style={{
                    backgroundColor: "#e0f2fe",
                    color: "#0284c7",
                    fontSize: "0.85rem",
                    padding: "2px 6px",
                    borderRadius: "5px",
                    marginLeft: "6px",
                  }}
                >
                  {item.category}
                </span>
                <p style={{ margin: "5px 0", color: "#374151" }}>
                  {item.description}
                </p>
              </div>

              <button
                onClick={() => deleteNews(item.id)}
                style={{
                  backgroundColor: "#ef4444",
                  color: "#fff",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#dc2626")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#ef4444")
                }
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NewsPage;