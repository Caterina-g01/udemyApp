import React from "react";
import "./search-panel.css";
export default function SearchPanel() {
  return (
    <div>
      <input
        type="text"
        className="form-control search-inut"
        placeholder="Найти сотрудника"
      />
    </div>
  );
}
