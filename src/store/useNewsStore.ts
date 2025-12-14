import { useState } from "react";
import type { NewsItem } from "../types";

export const useNewsStore = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  const addNews = (item: Omit<NewsItem, "id">) => {
    const newItem: NewsItem = {
      ...item,
      id: news.length ? news[news.length - 1].id + 1 : 1,
    };
    setNews([...news, newItem]);
  };

  const deleteNews = (id: number) => {
    setNews(news.filter((n) => n.id !== id));
  };

  return { news, addNews, deleteNews };
};
