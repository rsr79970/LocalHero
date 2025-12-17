// UrgencyPage.tsx
"use client";

import React from "react";
import "./UrgencyPage.css";

type UrgencyLevel = "urgent" | "medium" | "low";

interface HelpPoint {
  id: number;
  title: string;
  description: string;
  urgency: UrgencyLevel;
}

const helpPoints: HelpPoint[] = [
  { id: 1, title: "Fire Assistance", description: "Immediate help required!", urgency: "urgent" },
  { id: 2, title: "Medical Support", description: "Important, but not critical.", urgency: "medium" },
  { id: 3, title: "Food Distribution", description: "Can wait.", urgency: "low" },
];

export const AddPointPage: React.FC = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Help Urgency Levels</h1>
        <p className="description">
          The Urgency Level feature helps users quickly identify where help is needed most and make decisions without extra analysis.
        </p>
      </header>

      <main className="grid">
        {helpPoints.map((point) => (
          <div key={point.id} className={`card ${point.urgency}`}>
            <div className="card-header">
              <h2>{point.title}</h2>
              <span className={`badge ${point.urgency}`}>{point.urgency.toUpperCase()}</span>
            </div>
            <p>{point.description}</p>
          </div>
        ))}
      </main>

      <section className="additional">
        <h3>Additional Features</h3>
        <ul>
          <li>Filter points by urgency level.</li>
          <li>Sort points so that urgent items appear first.</li>
          <li>Highlight urgent points with more noticeable markers on the map.</li>
          <li>Helps users navigate the map efficiently and provide aid more effectively.</li>
        </ul>
      </section>
    </div>
  );
};