import React from "react";
import "./app-info.css";

export default function AppInfo({ data, increasedCount }) {
  return (
    <div>
      <div className="app-info">
        <h1>учет сотрудников в компании</h1>
        <h2>общее число сотрудников: {data.length}</h2>
        <h2>премию получат: {increasedCount}</h2>
      </div>
    </div>
  );
}
