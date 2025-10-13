import React from "react";

export default function MenuTab({ tabs, currentMenu, handleMenu }) {
  return (
    <ul className="tab-list">
      {tabs?.map((tab) => (
        <li key={tab.id} className="tab-item">
          <button
            className={currentMenu === tab["name"] ? "active" : ""}
            onClick={() => handleMenu(tab["name"])}
          >
            {tab["ko_name"]}
          </button>
        </li>
      ))}
    </ul>
  );
}
