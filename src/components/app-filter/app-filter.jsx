import React from "react";
import "./app-filter.css";

export default function AppFilter() {
  return (
    <div>
      <div className="btn-group">
        <button className="btn btn-light" type="button">
          все сотрудники
        </button>
        <button className="btn btn-outline-light" type="button">
          на повышение
        </button>
        <button className="btn btn-outline-light" type="button">
          зп больше 1000$
        </button>
      </div>
    </div>
  );
}
