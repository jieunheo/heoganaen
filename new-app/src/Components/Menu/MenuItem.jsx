import React from "react";

export default function MenuItem({ item }) {
  return (
    <li className="menu-item" key={item.id}>
      {item.url && (
        <div>
          <img src={item.url} alt={item.name} />
        </div>
      )}
      <div className="info-wrap">
        <p className="menu-name">
          <strong>{item.name}</strong>
          {item.desc && <span className="ex">({item.desc})</span>}
        </p>
        <p className="menu-name-en">{item["en_name"]}</p>
        <hr className="gray-line" />
        <p className="menu-price">
          <data value={item.price}>{item.price.toLocaleString("ko-KR")}</data>원
        </p>
      </div>
    </li>
  );
}
